import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users, SingleUser } from './users';
const BASE_URL = 'https://api.github.com/search/users';
const USER_URL = 'https://api.github.com/users'

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getUrl(): string {
    return BASE_URL;
  };

  getUrlForUsers(user: string, perPage?: number, page?: number): string {
    return `${this.getUrl()}?q=${user}&per_page=${perPage}&page=${page}`;
  };

  searchForUsers(user: string, perPage = 3, page = 1): Observable<Users> {
    return this.http.get<Users>(this.getUrlForUsers(user, perPage, page));
  };

  searchForUser(username: string): Observable<SingleUser> {
    return this.http.get<SingleUser>(`${USER_URL}/${username}`);
  }
}
