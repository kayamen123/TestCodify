import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MaterialModule } from 'src/app/material/material/material.module';
import { CardPostComponent } from './card-post.component';
import { CommentSectionModule } from '../comment-section/comment-section.module';



@NgModule({
  declarations: [CardPostComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CommentSectionModule
  ],
  exports : [CardPostComponent],
  providers:[DatePipe],
})
export class CardPostModule { }
