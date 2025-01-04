import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from './produit.modal';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000/products';  
  constructor(private http: HttpClient) { }
  getProducts(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiUrl);
  }
  addProduct(product: Produit): Observable<Produit> {
    return this.http.post<Produit>(this.apiUrl, product);  
  }
}
