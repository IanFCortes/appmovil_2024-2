import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {


  @Input() titulo:string=''
  saludo:string='Hola'

  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() {}

  toback() {
    this.navCtrl.back();
  }

}
