import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cliente } from '../Clases/clases';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceBJService {
  url: string = environment.urlApi;
  private _storage: Storage | null = null;

  constructor(private http: HttpClient,
    private storage: Storage,
    private toastCtrl: ToastController) {
    this.init();
  }

  set(key: string, value: any) {
    this._storage?.set(key, value);
  }
  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  logOut() {
    this._storage?.clear();
  }
 
  async presentToast(mesagge: string) {
    const toast = await this.toastCtrl.create({
      message: mesagge,
      duration: 2000
    });
    toast.present();
  }

  async Login(c: Cliente) {
    return await new Promise(resolve => {
      this.http.post<Cliente>(`${this.url}/auth/login`, c).subscribe(data => {
        if (data === null) {
          this.presentToast("Usuario y contraseña incorrectos");
          resolve(false);
        }
        //console.log(data)
        this.set('cliente', data);
        resolve(true);
      }, error => {
        this.presentToast(error.message);
      });

    });    
  }
}
