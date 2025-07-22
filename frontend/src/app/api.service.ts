import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  analyze(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/analyze`, formData);
  }
}
