import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CoreDataModule } from '@github-search/core-data';
import { CoreStateModule } from '@github-search/core-state';
import { MaterialModule } from '@github-search/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserInfoDialogComponent } from './user-info-dialog/user-info-dialog.component';

@NgModule({
  declarations: [AppComponent, SearchComponent, UserListComponent, UserInfoDialogComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    CoreStateModule,
    CoreDataModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
