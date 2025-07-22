import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  analyze(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/analyze`, formData);
  }
}
