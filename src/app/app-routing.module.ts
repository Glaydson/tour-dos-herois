import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroisComponent } from './herois/herois.component';
import { PainelComponent } from './painel/painel.component';
import { HeroiDetalheComponent } from './heroi-detalhe/heroi-detalhe.component';

const routes: Routes = [
  { path: '', redirectTo: '/painel', pathMatch: 'full' },
  { path: 'painel', component: PainelComponent },
  { path: 'herois', component: HeroisComponent },
  { path: 'detalhe/:id', component: HeroiDetalheComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
