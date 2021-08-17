import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

const modules: MatIconModule[] = [
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule
  ],
  
  exports: [
    MatIconModule
  ]
})
export class MaterialModule { }
