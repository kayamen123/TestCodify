import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Post } from '../../models/post.model';
import { DummyServiceService } from '../../service/dummy-service.service';

@Component({
  selector: 'app-user-allpost',
  templateUrl: './user-allpost.component.html',
  styleUrls: ['./user-allpost.component.scss']
})
export class UserAllpostComponent implements OnInit {

  newPost:Post[] = [];
  isRequestingData:boolean = true;
  category:string = "";
  prevCategory : string = "";
  pages=0;
  userId:string | null = '';
  doneRequest:boolean = false;

  constructor(
    private Activatedroute: ActivatedRoute,     
    private router: Router, 
    private DummyService:DummyServiceService
  ) { }

  ngOnInit(): void {
    this.Activatedroute.paramMap.subscribe(
      (params: ParamMap) => {
        this.userId = params.get('id');
      }
    )
    console.log(this.userId);
    this.getUserPostList();
  }
  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    //In chrome and some browser scroll is given to body tag
    let post = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max_page = document.documentElement.scrollHeight;

    // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
    if(post == max_page || post > max_page-30 )   {
        //check if currently still requesting data, to prevent multiple request
      if(this.isRequestingData){

      }else{
        if( this.doneRequest){
          console.log(this.doneRequest);
        }else{
          this.getUserPostList();
          console.log(this.doneRequest);
          console.log(this.newPost);
        }
      }
    }
  }

  getUserPostList(){
    if(this.doneRequest){

    }else{
      this.isRequestingData = true;
      this.DummyService.getUserPost(this.userId ? this.userId : "",this.pages)// resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        const body = { ... resp.body };
        let postList = body.data;
        console.log(postList);
        if(postList.length < 1){
          this.doneRequest=true;
        }else{
          postList.forEach((element: any) => {
            let stat = new Post().deserialize(element);
            this.newPost.push(stat);
            });
        }
        console.log(this.newPost);
        console.log(this.doneRequest);
        this.pages++;
        this.isRequestingData = false;
      });
    }
  }

  onCategoryClicked($event:string){
    this.category = $event;
    console.log($event);
    localStorage.setItem('category', this.category);
    console.log(localStorage.getItem('category'));
  }

}
