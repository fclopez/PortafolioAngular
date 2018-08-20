import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: any = {};
  carga: boolean = false;
  equipo: any = [];

  constructor(private http: HttpClient) {
    /*Leer el archivo JSON*/
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: any) => {
        this.carga = true;
        this.info = resp;
      });
  }

  public cargarEquipo() {
    this.http.get('https://angular-portafolio-bb16a.firebaseio.com/equipo.json')
      .subscribe((resp: any[]) => {
        this.equipo = resp;
      });
  }


}
