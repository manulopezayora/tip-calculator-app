import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [FormComponent, HeaderComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FormComponent, HeaderComponent]
})
export class MainModule {}
