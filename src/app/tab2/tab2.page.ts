import { Component } from '@angular/core';
import { Factura, ResponseModel } from '../Clases/clases';
import { FacturaserviceService } from '../servicios/facturaservice.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private facturaService:  FacturaserviceService) {}
  response:ResponseModel;
  facturas:Factura[] = [];
  ngOnInit() {
    this.getFacturas();
    
  }

  
  getFacturas(){
    this.facturaService.getFactura().subscribe(data=>{
      this.response = data;
      this.facturas=this.response.info;
      console.log(data)
    }, error=>{
      console.log(error.message)
    })
  }
}
