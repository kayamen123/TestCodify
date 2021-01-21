import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MaterialModule } from 'src/app/material/material/material.module';
import { CardUserModule } from 'src/app/components/card-user/card-user.module';
import { UserListComponent } from './user-list.component';
import { FlexLayoutModule } from "@angular/flex-layout";




@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CardUserModule,
    FlexLayoutModule
  ],
  providers:[DatePipe]
})
export class UserListModule { }
