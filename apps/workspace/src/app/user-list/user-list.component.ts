import { Component, Input } from '@angular/core';
import { Users } from '@github-search/core-data';

@Component({
  selector: 'github-search-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input() users!: Users
}
