import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { Teste1Component } from './teste1/teste1.component';
import { Teste2Component } from './teste2/teste2.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
  },
  { path: 'teste1', component: Teste1Component },
  { path: 'teste2', component: Teste2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
