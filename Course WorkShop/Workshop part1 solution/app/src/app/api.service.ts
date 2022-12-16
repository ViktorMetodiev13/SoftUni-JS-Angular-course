import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { enviroment } from "../environments/environment";
import { Theme } from './interfaces/theme';
import { Post } from './interfaces/Post';

const apiURL = enviroment.apiURL

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  loadThemes() {
    return this.httpClient.get<Theme[]>(`${apiURL}/themes`)
  }

  loadPosts(limit?: number) {
    return this.httpClient.get<Post[]>(`${apiURL}/posts${limit ? `?limit=${limit}` : ``}`)
  }
}
