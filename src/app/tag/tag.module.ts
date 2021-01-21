import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MaterialModule } from '../material/material/material.module';
import { TagComponent } from './tag.component';
import { TagPostModule } from '../components/tag-post/tag-post.module';



@NgModule({
  declarations: [TagComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TagPostModule
  ],
  providers:[DatePipe]
})
export class TagModule { }
