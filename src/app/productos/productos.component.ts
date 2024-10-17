import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {
  datos : any;
  constructor () {}
  private readonly productos = inject(ApiService);

  ngOnInit(): void {
    this.productos.obtenerProductos().subscribe(data => {
      this.datos = data
    })
  }
}
