import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Post } from '../models/post.model';
import { Tag } from '../models/tag.model';
import { DummyServiceService } from '../service/dummy-service.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  userTag:string | null = '';
  newTag: Tag[] = [];
  newPost:Post[] = [];
  isRequestingData:boolean = true;
  tag:string = "";
  prevTag : string = "";
  pages=0;
  doneRequest:boolean = false;
  constructor(
    private router: Router, 
    private Activatedroute: ActivatedRoute,
    private DummyService:DummyServiceService
  ) { }

  ngOnInit(): void {
    this.Activatedroute.paramMap.subscribe(
      (params: ParamMap) => {
        this.userTag = params.get('id');
        if(this.prevTag != this.userTag){
          this.newPost = [];
          this.pages = 0;
          window.scroll(0,0);
          this.getTagPostList();
        }else{
          this.prevTag = this.tag;
          this.getTagPostList();
        }
      }
    )
    console.log(this.userTag);
    this.getTagList();
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
          this.getTagPostList();
          console.log(this.doneRequest);
          console.log(this.newPost);
        }
      }
    }
  }
  getTagPostList(){
    if(this.doneRequest){

    }else{
      this.isRequestingData = true;
      this.DummyService.getTagPostList(this.pages,this.userTag ? this.userTag : "")// resp is of type `HttpResponse<Config>`
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

  onClickTag(tag:string){
    window.scroll(0,0);
    this.router.navigate(['', tag, "tags"]);
  }
  onCategoryClicked($event:string){
    this.tag = $event;
    this.newPost = [];
    this.pages = 0;
    window.scroll(0,0);
    this.router.navigate(['', this.tag, "tags"]);
  }
}