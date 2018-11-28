import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components';
import { CalculadoraService } from './services';

@NgModule({ // Sempre colocar o decorator para indicar que é um módulo
  imports: [
    CommonModule // indicando que não é o módulo principal
  ],
  declarations: [CalculadoraComponent],
  exports: [CalculadoraComponent],
  providers: [CalculadoraService]

})
export class CalculadoraModule { }
