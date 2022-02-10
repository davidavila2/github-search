import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import * as GithubActions from './github.actions';
import * as GithubFeature from './github.reducer';

@Injectable()
export class GithubEffects {
  init$ = createEffect(() =>
    this.dataPersistence.fetch(GithubActions.init, {
      run: (
        action: ReturnType<typeof GithubActions.init>,
        state: GithubFeature.GithubPartialState
      ) => {
        // Your custom service 'load' logic goes here. For now just return a success action...
        return GithubActions.loadGithubSuccess({ github: [] });
      },
      onError: (action: ReturnType<typeof GithubActions.init>, error) => {
        console.error('Error', error);
        return GithubActions.loadGithubFailure({ error });
      },
    })
  );

  constructor(
    private readonly actions$: Actions,
    private readonly dataPersistence: DataPersistence<GithubFeature.GithubPartialState>
  ) {}
}
