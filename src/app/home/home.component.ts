import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../models/post.model';
import { Tag } from '../models/tag.model';
import { DummyServiceService } from '../service/dummy-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newPost:Post[] = [];
  newTag: Tag[] = [];
  isRequestingData:boolean = true;
  tag:string = "";
  pages=0;
  doneRequest:boolean = false;

  constructor(
    private route: ActivatedRoute,     
    private router: Router, 
    private DummyService:DummyServiceService
  ) { }

  ngOnInit(): void {
      this.getPostList();
      this.getTagList();
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
          this.getPostList();
          console.log(this.doneRequest);
          console.log(this.newPost);
        }
      }
    }
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
  getPostList(){
    if(this.doneRequest){

    }else{
      this.isRequestingData = true;
      this.DummyService.getAllPost(this.pages)// resp is of type `HttpResponse<Config>`
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
    this.tag = $event;
    console.log($event);
    window.scroll(0,0);
    this.router.navigate(['', this.tag, "tags"]);

  }

  onClickTag(tag:string){
    window.scroll(0,0);
    this.router.navigate(['', tag, "tags"]);
  }
}
