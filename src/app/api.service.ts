import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() { }
  private readonly http = inject(HttpClient);

  obtenerProductos ():Observable<any> {
    return this.http.get("https://fakestoreapi.com/products");
  }

}
