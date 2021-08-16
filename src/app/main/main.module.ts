import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [FormComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [FormComponent, HeaderComponent]
})
export class MainModule {}
