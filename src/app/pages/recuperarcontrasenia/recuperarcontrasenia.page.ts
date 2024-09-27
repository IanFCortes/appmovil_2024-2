import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';  // Importa AlertController

@Component({
  selector: 'app-recuperarcontrasenia',
  templateUrl: './recuperarcontrasenia.page.html',
  styleUrls: ['./recuperarcontrasenia.page.scss'],
})
export class RecuperarcontraseniaPage implements OnInit {

  correo: string = '';

  constructor(private router: Router, private alertController: AlertController) { }  // Inyecta AlertController

  ngOnInit() { }

  // Validador personalizado para verificar el dominio del correo
  domainValidator(correo: string): boolean {
    const domain = 'duocuc.cl';
    if (correo && correo.indexOf('@') !== -1) {
      const emailDomain = correo.split('@')[1];
      return emailDomain === domain;
    }
    return false;
  }

  // Método para mostrar una alerta
  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Correo inválido',
      message: 'El correo debe pertenecer al dominio @duocuc.cl',
      buttons: ['OK']
    });
    await alert.present();
  }

  // Método de login con validación de dominio y alerta
  tologin(form: NgForm) {
    if (form.valid) {
      if (!this.domainValidator(this.correo)) {
        this.showAlert();  // Muestra la alerta si el dominio es incorrecto
        return;
      }
      console.log('Correo ingresado:', this.correo);
      this.router.navigate(["/login"]);
    }
  }
}
