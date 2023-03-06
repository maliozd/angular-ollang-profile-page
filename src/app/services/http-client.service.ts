import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../contracts/api/profile';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(@Inject("mockApiUrl") private requestUrl: string, private httpClient: HttpClient) { }


  getById<T>(id: number): Observable<T> {
    return this.httpClient.get<T>(`${this.requestUrl}/${id}`);
  }

  getAll<T>() : Observable<T> {
    return this.httpClient.get<T>(this.requestUrl);
  }

}
