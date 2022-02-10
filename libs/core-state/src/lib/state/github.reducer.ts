import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as GithubActions from './github.actions';
import { GithubEntity } from './github.models';

export const GITHUB_FEATURE_KEY = 'github';

export interface State extends EntityState<GithubEntity> {
  selectedId?: string | number; // which Github record has been selected
  loaded: boolean; // has the Github list been loaded
  error?: string | null; // last known error (if any)
}

export interface GithubPartialState {
  readonly [GITHUB_FEATURE_KEY]: State;
}

export const githubAdapter: EntityAdapter<GithubEntity> =
  createEntityAdapter<GithubEntity>();

export const initialState: State = githubAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const githubReducer = createReducer(
  initialState,
  on(GithubActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(GithubActions.loadGithubSuccess, (state, { github }) =>
    githubAdapter.setAll(github, { ...state, loaded: true })
  ),
  on(GithubActions.loadGithubFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return githubReducer(state, action);
}
