import { Component } from '@angular/core';
import { GithubService, SingleUser, Users } from '@github-search/core-data';
import { map } from 'rxjs';
@Component({
  selector: 'github-search-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  defaultSearch = {
    name: ''
  }
  users$!: Users;
  singleUser$!: SingleUser

  constructor(private githubService: GithubService) { }

  searchForUsers(user: string, perPage?: number, page?: number): void {
    this.githubService.searchForUsers(user, perPage, page).pipe(
      map((users) => this.users$ = users)
    ).subscribe()
  }

  letsChangeThePage(event: any) {
    event.page = 1;

    this.searchForUsers(this.defaultSearch.name, event.pageSize, event.pageIndex += 1);
  }
}
