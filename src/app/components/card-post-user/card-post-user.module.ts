import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CardPostUserComponent } from './card-post-user.component';
import { CommentSectionModule } from '../comment-section/comment-section.module';
import { MaterialModule } from 'src/app/material/material/material.module';



@NgModule({
  declarations: [CardPostUserComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CommentSectionModule
  ],
  exports : [CardPostUserComponent],
  providers:[DatePipe],
})
export class CardPostUserModule { }
