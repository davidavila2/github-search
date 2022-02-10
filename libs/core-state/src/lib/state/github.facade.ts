import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as GithubActions from './github.actions';
import * as GithubFeature from './github.reducer';
import * as GithubSelectors from './github.selectors';

@Injectable()
export class GithubFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(GithubSelectors.getGithubLoaded));
  allGithub$ = this.store.pipe(select(GithubSelectors.getAllGithub));
  selectedGithub$ = this.store.pipe(select(GithubSelectors.getSelected));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(GithubActions.init());
  }
}
