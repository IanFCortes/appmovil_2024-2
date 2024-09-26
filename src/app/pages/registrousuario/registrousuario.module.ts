import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrousuarioPageRoutingModule } from './registrousuario-routing.module';

import { RegistrousuarioPage } from './registrousuario.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrousuarioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RegistrousuarioPage]
})
export class RegistrousuarioPageModule {}
