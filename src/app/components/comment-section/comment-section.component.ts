import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../models/post.model';
import { DummyServiceService } from '../../service/dummy-service.service';
import { Tag } from '../../models/tag.model'
import { Comment } from '../../models/comment.model';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {


  @Input('comment') comment!: Comment;
  @Output() userClicked = new EventEmitter<string>();

  tags:Tag[] | undefined = [];
  publishDate:any;
  commentPage=0;
  constructor(
    public datepipe: 
    DatePipe,
    private router: Router, 
    private DummyService:DummyServiceService
  ) { }

  ngOnInit(): void {
    this.publishDate =this.datepipe.transform(this.comment?.publishDate, 'medium');
  }


  chooseUser(category:string): void { this.userClicked.emit(category); }

  showUserProfile(id:string){

  }
  
}
