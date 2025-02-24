import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';  // Correct API

  constructor(private http: HttpClient) {}

  getSampleData(p0: unknown): Observable<{ title: string; body: string }[]> {  // Correct Type
    return this.http.get<{ title: string; body: string }[]>(this.apiUrl);
  }
}
