import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRoutingModule } from './curso-routing.module';
import { FundamentosComponent } from './components/fundamentos/fundamentos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FundamentosComponent],
  imports: [CommonModule, CursoRoutingModule, FormsModule],
})
export class CursoModule {}
