import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CommentSectionComponent } from './comment-section.component';
import { MaterialModule } from 'src/app/material/material/material.module';



@NgModule({
  declarations: [CommentSectionComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports : [CommentSectionComponent],
  providers:[DatePipe],
})
export class CommentSectionModule { }
