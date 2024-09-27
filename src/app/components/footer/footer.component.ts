import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  @Input() titulo: string = '';
  saludo: string = 'Hola';

  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() {}

  toback() {
    this.navCtrl.back(); // Regresa a la página anterior
  }

  tonext() {
    // Navega a la página en la que estaba antes
    const previousUrl = this.router.url; // Obtén la URL actual
    // Lógica para determinar la página anterior, si es necesario
    this.router.navigate([previousUrl]); // Navega a la página anterior
  }

  navigateToNextPage() {
    this.router.navigate(['/next-page']); // Cambia '/next-page' por la ruta que desees
  }
}
