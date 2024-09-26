import { Component, OnInit } from '@angular/core';
import { Menulink } from 'src/app/interfaces/menulink';
import { Crearviaje } from 'src/app/interfaces/crearviaje';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  links:Menulink[]=[
    {
      link:'/botones',
      icono:'radio-button-on-outline',
      label:'botones'
    },
    {
      link:'/alertas',
      icono:'warning-outline',
      label:'alertas'
    },
    {
      link:'/formulario',
      icono:'reader-outline',
      label:'formulario'
    }
  ]

  crearviaje: Crearviaje = {
    destino: '',
    precio: 0,
    pasajeros: 0 
  }

  constructor(private router: Router) { }

  

  ngOnInit() {
  }

  crearViaje() {
    // Aquí puedes agregar la lógica para crear el viaje
    console.log('Destino:', this.crearviaje.destino);
    console.log('Precio:', this.crearviaje.precio);
    console.log('Cantidad de pasajeros:', this.crearviaje.pasajeros);
    this.router.navigate(["/crearviaje"]);

    // Si necesitas hacer algo más con los datos, como validarlos o enviarlos a una API, puedes agregarlo aquí.
  }

}
