import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cursos',
    pathMatch: 'full',
  },
  {
    path: 'cursos',
    loadChildren: () =>
      import('./modules/curso/curso.module').then((m) => m.CursoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
