import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Producto } from '../Clases/clases';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {

  constructor(private http: HttpClient) { }

  url: string = environment.urlApi;
  
  getProductos(){
    return this.http.get<Producto[]>(`${this.url}/Producto`);
  }

}
