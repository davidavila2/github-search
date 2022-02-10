import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './users';
const BASE_URL = 'https://api.github.com/search/users';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getUrl(): string {
    return BASE_URL;
  };

  getUrlForUser(user: string, page?: string): string {
    return `${this.getUrl()}?q=${user}&per_page=10&page=${page}`;
  };

  searchForUser(user: string, page?: string): Observable<Users> {
    return this.http.get<Users>(this.getUrlForUser(user, page));
  };
}
