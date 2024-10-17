import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { TokenService } from './token.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'semana4';
  admin = false;
  private cookie = inject(TokenService)

  botonClick () {
    this.admin = !this.admin
    this.cookie.insertarValor(this.admin.toString())
  }
}
