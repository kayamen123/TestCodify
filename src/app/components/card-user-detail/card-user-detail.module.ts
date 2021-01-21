import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MaterialModule } from 'src/app/material/material/material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CardUserDetailComponent } from './card-user-detail.component';



@NgModule({
  declarations: [CardUserDetailComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports : [CardUserDetailComponent],
  providers:[DatePipe],
})
export class CardUserDetailModule { }
