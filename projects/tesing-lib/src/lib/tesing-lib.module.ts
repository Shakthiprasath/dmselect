import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesingLibComponent } from './tesing-lib.component';

@NgModule({
  declarations: [TesingLibComponent],
  imports: [
    CommonModule
  ],
  exports: [TesingLibComponent]
})
export class TesingLibModule { }
