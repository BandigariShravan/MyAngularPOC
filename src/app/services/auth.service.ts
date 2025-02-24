import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://your-api.com/login'; // Replace with real API

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { email, password }).pipe(
      tap((response) => {
        if (response.token) {
          localStorage.setItem('token', response.token); // ✅ Store token
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('token'); // ✅ Remove token on logout
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token'); // ✅ Check if token exists
  }
}
