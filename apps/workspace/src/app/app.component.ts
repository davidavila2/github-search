import { Component } from '@angular/core';
import { GithubService, Users } from '@github-search/core-data';
import { map } from 'rxjs';
@Component({
  selector: 'github-search-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  name!: '';
  users$!: Users;

  constructor(private githubService: GithubService) { }

  searchForUser(user: string): void {
    this.githubService.searchForUser(user).pipe(
      map((users) => this.users$ = users)
    ).subscribe()
  }
}
