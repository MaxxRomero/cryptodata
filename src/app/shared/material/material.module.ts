import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';

const COMPONENTS = [
  MatCardModule,
  MatButtonModule,
  MatTabsModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [...COMPONENTS]
})
export class MaterialModule { }
