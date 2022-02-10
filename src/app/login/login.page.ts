import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';

import {  Cliente } from '../Clases/clases';
import { ClienteServiceBJService } from '../servicios/cliente-service-bj.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private navCtrl:NavController,
    private toastCtrl:ToastController,
    private clienteService: ClienteServiceBJService){}
    

  email:string="aaa@gmail.com";
  pass:string="Password";

  ngOnInit() {
  }

  async presentToast(mesagge:string) {
    const toast = await this.toastCtrl.create({
      message: mesagge,
      duration: 2000
    });
    toast.present();
  }

  async ingresar(){



    if(this.email.length < 1 || this.pass.length < 1){
      this.presentToast("Ingresar el Usuario y Contraseña");
      return;
    }

    
    let cliente:Cliente = new Cliente();
    cliente.email = this.email;
    cliente.password = this.pass;

    const valid = await this.clienteService.Login(cliente);
    if(true){
      this.navCtrl.navigateRoot('/main/tabs/tab1');
    }


  }
 
  registrarse(){

    this.navCtrl.navigateRoot('/main/tabs/tab1');
  }


}
