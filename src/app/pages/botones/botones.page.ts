import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.page.html',
  styleUrls: ['./botones.page.scss'],
})
export class BotonesPage implements OnInit {

  mensaje:string=''

  constructor() { }

  ngOnInit() {
  }

  saludo(){
    console.log("hola");
    this.mensaje='Hola desde el botón amarillo';
  }
}
