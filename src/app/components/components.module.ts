import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [EncabezadoComponent, FooterComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports:[EncabezadoComponent,FooterComponent]
})
export class ComponentsModule { }
