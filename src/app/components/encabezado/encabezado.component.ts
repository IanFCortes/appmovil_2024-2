import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss'],
})
export class EncabezadoComponent  implements OnInit {


  @Input() titulo:string=''
  saludo:string='Hola'

  constructor(private router: Router) { }

  ngOnInit() {}

  tologin() {
    this.router.navigate(["/login"]);
  }

}
