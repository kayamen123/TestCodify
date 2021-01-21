import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TagPostComponent } from './tag-post.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { CommentSectionModule } from '../comment-section/comment-section.module';



@NgModule({
  declarations: [TagPostComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CommentSectionModule
  ],
  exports : [TagPostComponent],
  providers:[DatePipe],
})
export class TagPostModule { }
