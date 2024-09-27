import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperarcontraseniaPage } from './recuperarcontrasenia.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperarcontraseniaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarcontraseniaPageRoutingModule {}
