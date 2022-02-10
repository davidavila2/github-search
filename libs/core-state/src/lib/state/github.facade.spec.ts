import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as GithubActions from './github.actions';
import { GithubEffects } from './github.effects';
import { GithubFacade } from './github.facade';
import { GithubEntity } from './github.models';
import {
  GITHUB_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './github.reducer';
import * as GithubSelectors from './github.selectors';

interface TestSchema {
  github: State;
}

describe('GithubFacade', () => {
  let facade: GithubFacade;
  let store: Store<TestSchema>;
  const createGithubEntity = (id: string, name = ''): GithubEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(GITHUB_FEATURE_KEY, reducer),
          EffectsModule.forFeature([GithubEffects]),
        ],
        providers: [GithubFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(GithubFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allGithub$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allGithub$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadGithubSuccess` to manually update list
     */
    it('allGithub$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allGithub$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        GithubActions.loadGithubSuccess({
          github: [createGithubEntity('AAA'), createGithubEntity('BBB')],
        })
      );

      list = await readFirst(facade.allGithub$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
