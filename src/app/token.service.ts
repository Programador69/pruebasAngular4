import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private cookies: CookieService) { }

  insertarValor(valor:string) {
    this.cookies.set("usuario", valor);
  }

  obtenerValor() {
    return this.cookies.get("usuario");
  }
}
