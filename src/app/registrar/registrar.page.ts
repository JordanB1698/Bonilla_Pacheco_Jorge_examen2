import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Cliente } from '../Clases/clases';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  constructor(private navCtrl:NavController,
    private toastCtrl:ToastController,) { }
 cliente:Cliente = new Cliente();

  ngOnInit() {
    this.cliente.cedRucCliente='050'
  }

  login(){
    this.cliente.cedRucCliente
    
    this.navCtrl.navigateRoot('/registrar');
  }

}
