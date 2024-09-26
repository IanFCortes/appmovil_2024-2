import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UsuarioReg } from 'src/app/interfaces/i_usuario';

@Component({
  selector: 'app-login',
  templateUrl: './registrousuario.page.html',
  styleUrls: ['./registrousuario.page.scss'],
})
export class RegistrousuarioPage implements OnInit {

  usr: UsuarioReg = {
    username: '',
    password: '',
    repassword: ''

  }
  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  registrado() {
    console.log("Registrado");
    if(this.usr.password == this.usr.repassword) {
      this.router.navigate(["/login"]);
    }
    else {
      this.alerta();
    }
  }

  async alerta() {


    const alert = await this.alertController.create({
      header: 'Acceso denegado',
      subHeader: 'Usuario y/o contraseña incorrecta',
      message: 'Intentalo nuevamente',
      backdropDismiss: false,
      buttons: [{
        text: "Aceptar",
        cssClass: 'btn-verde',
        handler: () => {
          console.log("Apreto aceptar desde controller");
        }
      },],
    });

    await alert.present();
  }

}
