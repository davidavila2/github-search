import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as GithubActions from './github.actions';
import { GithubEffects } from './github.effects';

describe('GithubEffects', () => {
  let actions: Observable<Action>;
  let effects: GithubEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        GithubEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(GithubEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: GithubActions.init() });

      const expected = hot('-a-|', {
        a: GithubActions.loadGithubSuccess({ github: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
