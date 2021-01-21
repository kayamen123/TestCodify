import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material/material/material.module';
import { CardPostModule } from '../components/card-post/card-post.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CardPostModule
    ],
    providers:[DatePipe]
})
export class HomeModule { }