import { NgModule } from '@angular/core';
import { DmSelectComponent } from './dm-select.component';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [DmSelectComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [DmSelectComponent]
})
export class DmSelectModule { }
