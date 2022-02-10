import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../Clases/clases';

@Injectable({
  providedIn: 'root'
})
export class FacturaserviceService {
  url: string = environment.urlApi;
  constructor(private http: HttpClient) { }

  getFactura(){
    return this.http.get<ResponseModel>(`${this.url}/Factura`);
  }

}
