import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Cliente } from '../Clases/clases';
import { ClienteServiceBJService } from '../servicios/cliente-service-bj.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  constructor(private navCtrl:NavController,
    private toastCtrl:ToastController,
    private clienteService: ClienteServiceBJService) { }
 cliente:Cliente = new Cliente();

  ngOnInit() {
    
  }


  async registrar(){

    if (this.cliente.cedRucCliente.length < 10){
      this.presentToast('Cedula debe tener 10 caracteres');
      console.log(this.cliente)

      return;
    }

  
    if (this.cliente.nombreCliente.length < 3){
      this.presentToast('Nombre Incorrecto');
      console.log(this.cliente)
      return;
    }

   

    if (this.cliente.apellidoCliente.length < 3){
      this.presentToast('Apellido Incorrecto');
      console.log(this.cliente)
      return;
    }
    

    if (this.cliente.email.length < 3){
      this.presentToast('Email Incorrecto');
      console.log(this.cliente)

      return;
    }

    if (this.cliente.password.length <6|| this.cliente.password.length > 10){
      this.presentToast('Passwrod debe tener 10 caracteres');
      console.log(this.cliente)

      return;
    }

    const valid = await this.clienteService.Registrar(this.cliente);
    if(true){
      this.navCtrl.navigateRoot('/login');
    }




  }

  async presentToast(mesagge:string) {
    const toast = await this.toastCtrl.create({
      message: mesagge,
      duration: 2000
    });
    toast.present();
  }

  login(){
    this.cliente.cedRucCliente
    
    this.navCtrl.navigateRoot('/login');
  }

}
