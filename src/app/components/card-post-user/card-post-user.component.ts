import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../models/post.model';
import { DummyServiceService } from '../../service/dummy-service.service';
import { Tag } from '../../models/tag.model'
import { Comment } from '../../models/comment.model';

@Component({
  selector: 'app-card-post-user',
  templateUrl: './card-post-user.component.html',
  styleUrls: ['./card-post-user.component.scss']
})
export class CardPostUserComponent implements OnInit {
  @Input('post') post!: Post;
  @Output() categoryClicked = new EventEmitter<string>();

  comments:Comment[] = []
  tags:Tag[] | undefined = [];
  publishDate:any;
  showComment:boolean=false;
  isLoadingComment:boolean=false;
  commentPage=0;
  userId: string= "";


  constructor(
    public datepipe: 
    DatePipe,
    private router: Router, 
    private DummyService:DummyServiceService ) { }

  ngOnInit(): void {
    this.publishDate =this.datepipe.transform(this.post?.publishDate, 'medium');
    this.tags = this.post?.tags;
  }
  chooseCategory(category:string): void { this.categoryClicked.emit(category); }

  showUserProfile(id:string){
    window.scroll(0,0);
    this.router.navigate(['', this.post.owner.id]);
  }
  showComments(){
    if(this.showComment){
      this.showComment = false;
    }else{
      this.isLoadingComment = true;
      this.comments = [];
      this.DummyService.getCommentsList(this.post.id)// resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        const body = { ... resp.body };
        let postList = body.data;
        postList.forEach((element: any) => {
          let stat = new Comment().deserialize(element);
          this.comments.push(stat);
        });
        console.log(this.comments);
        this.isLoadingComment = false;
        this.showComment = true;
      });
    }
  }

    onUserClicked($event:string){
      this.userId = $event;
      console.log($event);
      window.scroll(0,0);
  }

}
