import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

const COMPONENTS = [
  MatCardModule,
  MatButtonModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [...COMPONENTS]
})
export class MaterialModule { }
