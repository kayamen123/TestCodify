import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CardUserComponent } from './card-user.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
  declarations: [CardUserComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports : [CardUserComponent],
  providers:[DatePipe],
})
export class CardUserModule { }
