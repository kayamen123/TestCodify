import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MaterialModule } from 'src/app/material/material/material.module';
import { CardUserDetailModule } from 'src/app/components/card-user-detail/card-user-detail.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserDetailComponent } from './user-detail.component';



@NgModule({
  declarations: [UserDetailComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CardUserDetailModule,
    FlexLayoutModule
  ],
  providers:[DatePipe]
})
export class UserDetailModule { }
