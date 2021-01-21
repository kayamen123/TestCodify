import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from'./user/user-detail/user-detail.component';
import { UserAllpostComponent } from './user/user-allpost/user-allpost.component';
import { TagComponent } from './tag/tag.component';

const routes: Routes = [
  { path: '', redirectTo: 'home' , pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'user-list', component: UserListComponent},
  { path: ':id', component: UserDetailComponent },
  { path: ':id/posts', component: UserAllpostComponent },
  { path: ':id/tags' , component: TagComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
