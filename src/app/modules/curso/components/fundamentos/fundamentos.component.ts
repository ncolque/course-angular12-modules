import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundamentos',
  templateUrl: './fundamentos.component.html',
  styleUrls: ['./fundamentos.component.css'],
})
export class FundamentosComponent implements OnInit {
  titulo = 'Curso de ANGULAR con enfoque en modulos';
  nombreInterpolacion = 'Nicolas';
  banderaPropertyBinding = true;
  textoEventBinding = 'No registrado';
  twoWayDataBindingBidireccional = 'Prueba';

  constructor() {}

  ngOnInit(): void {}

  saludar(nombre: string) {
    console.log(`Hola ${nombre}`);
  }

  eventBinding(event: Event) {
    this.textoEventBinding = 'Registrado';
  }
}
