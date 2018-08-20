import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ProductoInterface } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: ProductoInterface[] = [];
  cargando: boolean = true;

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    this.http.get('https://angular-portafolio-bb16a.firebaseio.com/productos_idx.json')
      .subscribe((resp: ProductoInterface[]) => {
        this.productos = resp;
        
        setTimeout(() => {
          this.cargando = false;  
        }, 1000);
      });
  }


}
