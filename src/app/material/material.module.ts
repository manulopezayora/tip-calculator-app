import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';

const materialComponents = [MatFormFieldModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...materialComponents],
  exports: [...materialComponents]
})
export class MaterialModule {}
