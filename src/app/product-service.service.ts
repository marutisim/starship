import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> { // Change the return type to any[]
    return this.http.get<any[]>('https://swapi.dev/api/starships/');
  }

  getPaginatedProducts(page: number, pageSize: number): Observable<any> {
    const url = `https://swapi.dev/api/starships/?page=${page}&pageSize=${pageSize}`;
    return this.http.get<any>(url);
  }
  
}
