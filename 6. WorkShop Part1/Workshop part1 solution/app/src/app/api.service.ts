import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { enviroment } from "../environments/environment";

const apiURL = enviroment.apiURL

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  loadThemes() {
    return this.httpClient.get(`${apiURL}/themes`)
  }

  loadPosts(limit?: number) {
    return this.httpClient.get(`${apiURL}/posts${limit ? `?limit=${limit}` : ``}`)
  }
}
