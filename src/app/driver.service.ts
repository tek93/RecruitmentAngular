import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private baseUrl = 'http://localhost:8093/drivers';
  private baseUrl2 = 'http://localhost:8093/driver';

  constructor(private http: HttpClient) { }

  getDriver(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl2}/${id}`);
  }

  createDriver(driver: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, driver);
  }

  updateDriver(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteDriver(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getDriversList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
