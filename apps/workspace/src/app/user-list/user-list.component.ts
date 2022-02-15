import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Users } from '@github-search/core-data';
import { UserInfoDialogComponent } from '../user-info-dialog/user-info-dialog.component';

@Component({
  selector: 'github-search-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input() users!: Users

  constructor(public dialog: MatDialog) { }

  openDialog(name: string) {
    this.dialog.open(UserInfoDialogComponent, {
      data: name
    })
  }
}
