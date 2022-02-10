import { createAction, props } from '@ngrx/store';
import { GithubEntity } from './github.models';

export const init = createAction('[Github Page] Init');

export const loadGithubSuccess = createAction(
  '[Github/API] Load Github Success',
  props<{ github: GithubEntity[] }>()
);

export const loadGithubFailure = createAction(
  '[Github/API] Load Github Failure',
  props<{ error: any }>()
);
