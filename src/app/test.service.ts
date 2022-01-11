import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Observable } from 'rxjs';
import { Quote } from './quote.model';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  
  constructor(private http: HttpClient) {}

  getData(): Observable<Quote[]> {
    return this.http.get<Quote[]>(environment.apiUrl);
  }
}