import { Component } from '@angular/core';
import { Producto } from '../Clases/clases';
import { ProductoServiceService } from '../servicios/producto-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private productoService:ProductoServiceService) {}

  productos:Producto[] = [];

  ngOnInit() {
    this.getProductos();
    console.log('jola')
  }

  
  getProductos(){
    this.productoService.getProductos().subscribe(data=>{
      this.productos = data;
      console.log(data)
    }, error=>{
      console.log(error.message)
    })
  }
}
