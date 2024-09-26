import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearviaje',
  templateUrl: './crearviaje.page.html',
  styleUrls: ['./crearviaje.page.scss'],
})
export class CrearviajePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  tologin() {
    this.router.navigate(["/login"]);
  }

}
