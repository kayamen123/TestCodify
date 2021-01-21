import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Tag } from 'src/app/models/tag.model';
import { User } from 'src/app/models/user.model';
import { DummyServiceService } from 'src/app/service/dummy-service.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  newTag: Tag[] = [];
  tag:string = "";
  doneRequest:boolean = false;
  prevTag : string = "";
    isLoading:boolean = true;
  userId:string | null = '';
  userDetail: User = new User;
  constructor(
    private router: Router,
     private Activatedroute: ActivatedRoute,
     private DummyService:DummyServiceService
  ) { }

  ngOnInit(): void {
    this.Activatedroute.paramMap.subscribe(
      (params: ParamMap) => {
        this.userId = params.get('id');
      }
    )
    console.log(this.userId);
    this.getUserDetail();
    this.getTagList();
  }

  getUserDetail(){
    this.DummyService.getUserDetail(this.userId ? this.userId : "").subscribe(resp =>{
      const body = { ... resp.body };
      this.userDetail = this.userDetail.deserialize(body);
      this.isLoading = false;
      console.log(this.userDetail);
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

  showUserPosts(){
    window.scroll(0,0);
    this.router.navigate(['', this.userId ,"posts"]);
  }

  onClickTag(tag:string){
    window.scroll(0,0);
    this.router.navigate(['', tag, "tags"]);
  }

}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            