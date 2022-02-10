import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import {  Cliente } from '../Clases/clases';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router,
    private toastCtrl:ToastController){}
    //private clienteService: ClienteService) { }

  email:string="";
  pass:string="";

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

    //const valid = await this.c.Login(conductor);
    if(true){
      this.router.navigate(['/tab1']);
    }


  }
 
  registrarse(){

    this.router.navigate(['/registrar-usuario']);
  }


}
