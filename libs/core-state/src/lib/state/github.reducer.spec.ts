import { Action } from '@ngrx/store';

import * as GithubActions from './github.actions';
import { GithubEntity } from './github.models';
import { State, initialState, reducer } from './github.reducer';

describe('Github Reducer', () => {
  const createGithubEntity = (id: string, name = ''): GithubEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Github actions', () => {
    it('loadGithubSuccess should return the list of known Github', () => {
      const github = [
        createGithubEntity('PRODUCT-AAA'),
        createGithubEntity('PRODUCT-zzz'),
      ];
      const action = GithubActions.loadGithubSuccess({ github });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
