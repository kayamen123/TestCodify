import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { DatePipe } from '@angular/common';
import { CardPostComponent } from './components/card-post/card-post.component';
import { CommentSectionComponent } from './components/comment-section/comment-section.component';
import { UserAllpostComponent } from './user/user-allpost/user-allpost.component';
import { CardPostUserComponent } from './components/card-post-user/card-post-user.component';
import { CardUserComponent } from './components/card-user/card-user.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { UserRoutingModule } from './user/user-routing.module';
import { CardUserDetailComponent } from './components/card-user-detail/card-user-detail.component';
import { TagComponent } from './tag/tag.component';
import { TagPostComponent } from './components/tag-post/tag-post.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserListComponent,
    CardPostComponent,
    CommentSectionComponent,
    UserAllpostComponent,
    CardPostUserComponent,
    CardUserComponent,
    UserDetailComponent,
    CardUserDetailComponent,
    TagComponent,
    TagPostComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    UserRoutingModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
