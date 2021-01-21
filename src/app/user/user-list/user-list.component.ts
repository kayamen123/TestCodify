import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { DummyServiceService } from 'src/app/service/dummy-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  newUser:User[] = [];
  isRequestingData:boolean = true;
  category:string = "";
  userId:string | null = '';
  pages=0;
  doneRequest:boolean = false;
  constructor(
    private route: ActivatedRoute,     
    private router: Router, 
    private DummyService:DummyServiceService
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.DummyService.getUserList()// resp is of type `HttpResponse<Config>`
    .subscribe(resp => {
      const body = { ... resp.body };
      let users = body.data
      users.forEach((element: any) => {
        let stat = new User().deserialize(element);
        this.newUser.push(stat);
        });
    });
  }
}
