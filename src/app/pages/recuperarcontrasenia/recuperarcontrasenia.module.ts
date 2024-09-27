import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarcontraseniaPageRoutingModule } from './recuperarcontrasenia-routing.module';

import { RecuperarcontraseniaPage } from './recuperarcontrasenia.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarcontraseniaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RecuperarcontraseniaPage]
})
export class RecuperarcontraseniaPageModule {}
