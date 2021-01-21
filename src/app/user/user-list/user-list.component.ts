import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tag } from 'src/app/models/tag.model';
import { User } from 'src/app/models/user.model';
import { DummyServiceService } from 'src/app/service/dummy-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  newUser:User[] = [];
  
  newTag: Tag[] = [];
  tag:string = "";
  prevTag : string = "";
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
    this.getTagList();
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


  getTagList(){
    this.DummyService.getTagPost()// resp is of type `HttpResponse<Config>`
    .subscribe(resp => {
      const body = { ... resp.body };
      let tagList = body.data;
      console.log(tagList);
      if(tagList.length < 1){
        this.doneRequest=true;
      }else{
        tagList.forEach((element: any) => {
          let stat = new Tag(element);
          this.newTag.push(stat);
          });
      }
      console.log(this.newTag);
    });
  }
  onClickTag(tag:string){
    window.scroll(0,0);
    this.router.navigate(['', tag, "tags"]);
  }

}
