import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {

  @Input('user') user!: User;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  showUserPosts(){
    window.scroll(0,0);
    this.router.navigate(['', this.user.id ,"posts"]);
  }
  showUserProfile(){
    window.scroll(0,0);
    this.router.navigate(['', this.user.id]);
  }

}
