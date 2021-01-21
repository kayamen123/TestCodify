import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CardPostUserModule } from 'src/app/components/card-post-user/card-post-user.module';
import { MaterialModule } from 'src/app/material/material/material.module';
import { UserAllpostComponent } from './user-allpost.component';



@NgModule({
  declarations: [UserAllpostComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CardPostUserModule
  ],
  providers:[DatePipe]
})
export class UserAllpostModule { }
