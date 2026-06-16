import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundamentosComponent } from './components/fundamentos/fundamentos.component';

const routes: Routes = [
  {
    path: '',
    component: FundamentosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoRoutingModule {}
