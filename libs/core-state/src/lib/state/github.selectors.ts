import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GITHUB_FEATURE_KEY, State, githubAdapter } from './github.reducer';

// Lookup the 'Github' feature state managed by NgRx
export const getGithubState = createFeatureSelector<State>(GITHUB_FEATURE_KEY);

const { selectAll, selectEntities } = githubAdapter.getSelectors();

export const getGithubLoaded = createSelector(
  getGithubState,
  (state: State) => state.loaded
);

export const getGithubError = createSelector(
  getGithubState,
  (state: State) => state.error
);

export const getAllGithub = createSelector(getGithubState, (state: State) =>
  selectAll(state)
);

export const getGithubEntities = createSelector(
  getGithubState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getGithubState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getGithubEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
