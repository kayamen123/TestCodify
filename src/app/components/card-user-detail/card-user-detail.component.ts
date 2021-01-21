import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-card-user-detail',
  templateUrl: './card-user-detail.component.html',
  styleUrls: ['./card-user-detail.component.scss']
})
export class CardUserDetailComponent implements OnInit {

  @Input('user_detail') userDetail!: User;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  showUserPosts(){
    window.scroll(0,0);
    this.router.navigate(['', this.userDetail.id ,"posts"]);
  }

}
