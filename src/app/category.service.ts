import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Driver } from './driver';
import { Observable } from 'rxjs';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 
  private baseUrl = 'http://localhost:8093/drivers';
  private baseUrl2 = 'http://localhost:8093/driver';
  URLcategory='/category';

  constructor(private http: HttpClient) { }

  
  getCategoryByDriver(driver_id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${driver_id}/${this.URLcategory}`);

    //http://localhost:8093/drivers/1/category
  }

  createCategory(category: Category, driver_id:number): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${driver_id}/${this.URLcategory}`,category);
  }

  // updateDriver(id: number, value: any): Observable<Object> {
  //   return this.http.put(`${this.baseUrl}/${id}`, value);
  // }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${this.URLcategory}/${id}`, { responseType: 'text' });
  }

  // getDriversList(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}`);
  // }
}
