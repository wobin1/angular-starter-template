import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


const Material=[
  MatSlideToggleModule
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule, Material
  ],
  exports: [Material]
})
export class MaterialModule { }
