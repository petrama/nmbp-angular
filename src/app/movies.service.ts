import { Injectable } from '@angular/core';

import { HttpClientModule, HttpClient }    from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private moviesUrl='http://127.0.0.1:5000';

  constructor(
    private http: HttpClient
  ) { }

  addMovie(data):Observable<any>{
    return this.http.post(`${this.moviesUrl}/add`,data);
  }

  search(data):Observable<any>{
    return this.http.post(`${this.moviesUrl}/search`,data);
  }

  auto(data):Observable<any>{
    return this.http.post(`${this.moviesUrl}/auto`,data);
  }


}
