import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UsuarioReg } from 'src/app/interfaces/i_usuario';

@Component({
  selector: 'app-registrousuario',
  templateUrl: './registrousuario.page.html',
  styleUrls: ['./registrousuario.page.scss'],
})
export class RegistrousuarioPage implements OnInit {
  usr: UsuarioReg = {
    username: '',
    password: '',
    repassword: ''
  };

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() { }

  async registrado(form: NgForm) {
    console.log("Registrado");

    // Validar que el formulario sea válido y las contraseñas coincidan
    if (form.valid && this.usr.password === this.usr.repassword) {
      // Aquí puedes agregar lógica para guardar el usuario, como llamar a un servicio
      console.log('Usuario registrado:', this.usr);
      this.router.navigate(["/login"]);
    } else {
      // Si el formulario no es válido o las contraseñas no coinciden, muestra una alerta
      await this.alerta('Las contraseñas no coinciden o el formulario es inválido.');
    }
  }

  async alerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      backdropDismiss: false,
      buttons: [{
        text: "Aceptar",
        cssClass: 'btn-verde',
        handler: () => {
          console.log("Se presionó Aceptar en la alerta");
        }
      }],
    });

    await alert.present();
  }
}
