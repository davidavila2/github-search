import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromGithub from './state/github.reducer';
import { GithubEffects } from './state/github.effects';
import { GithubFacade } from './state/github.facade';
import { DataPersistence } from '@nrwl/angular';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([GithubEffects]),
  ],
  providers: [GithubFacade, DataPersistence],
})
export class CoreStateModule { }
// fromGithub.GITHUB_FEATURE_KEY, fromGithub.reducer
