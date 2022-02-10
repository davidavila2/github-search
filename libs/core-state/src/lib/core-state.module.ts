import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromGithub from './state/github.reducer';
import { GithubEffects } from './state/github.effects';
import { GithubFacade } from './state/github.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromGithub.GITHUB_FEATURE_KEY, fromGithub.reducer),
    EffectsModule.forFeature([GithubEffects]),
  ],
  providers: [GithubFacade],
})
export class CoreStateModule {}
