import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { CardCryptoComponent } from './components/card-crypto/card-crypto.component';


const COMPONENTS = [
  CardCryptoComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[...COMPONENTS]
})
export class SharedModule { }
