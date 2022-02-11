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

  getUrlForUser(user: string, perPage?: number, page?: number): string {
    return `${this.getUrl()}?q=${user}&per_page=${perPage}&page=${page}`;
  };

  searchForUser(user: string, perPage = 10, page = 1): Observable<Users> {
    return this.http.get<Users>(this.getUrlForUser(user, perPage, page));
  };
}
