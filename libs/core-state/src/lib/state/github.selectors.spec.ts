import { GithubEntity } from './github.models';
import {
  githubAdapter,
  GithubPartialState,
  initialState,
} from './github.reducer';
import * as GithubSelectors from './github.selectors';

describe('Github Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getGithubId = (it: GithubEntity) => it.id;
  const createGithubEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as GithubEntity);

  let state: GithubPartialState;

  beforeEach(() => {
    state = {
      github: githubAdapter.setAll(
        [
          createGithubEntity('PRODUCT-AAA'),
          createGithubEntity('PRODUCT-BBB'),
          createGithubEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Github Selectors', () => {
    it('getAllGithub() should return the list of Github', () => {
      const results = GithubSelectors.getAllGithub(state);
      const selId = getGithubId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = GithubSelectors.getSelected(state) as GithubEntity;
      const selId = getGithubId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getGithubLoaded() should return the current "loaded" status', () => {
      const result = GithubSelectors.getGithubLoaded(state);

      expect(result).toBe(true);
    });

    it('getGithubError() should return the current "error" state', () => {
      const result = GithubSelectors.getGithubError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
