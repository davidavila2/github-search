import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GithubService, SingleUser } from '@github-search/core-data';
import { map } from 'rxjs';

@Component({
  selector: 'github-search-dialog',
  templateUrl: './user-info-dialog.component.html',
  styleUrls: ['./user-info-dialog.component.scss']
})
export class UserInfoDialogComponent implements OnInit {
  user$!: SingleUser;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.searchForUser(this.data).pipe(
      map((user) => this.user$ = user)
    ).subscribe();
  }
}
