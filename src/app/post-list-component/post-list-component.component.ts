import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  lastUpdate = new Date();

  postTitle: string = 'Mon premier post';
  postContent: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis turpis, fringilla vel urna quis, congue interdum ante. Vestibulum nec ipsum et metus sagittis elementum. Aliquam ullamcorper, neque eget placerat bibendum, augue quam bibendum odio, at aliquam mi est sit amet diam. Suspendisse orci est, mollis non luctus eget, mollis congue ligula.';
  postloveIts: number = 0;
  postdontloveIts: number = 0;
  postCreated_at: Date

  constructor() { }

  ngOnInit() {
  }

  getStatus(){
    return this.postloveIts;
  }

  onLike(){
    this.postloveIts +=1;
  }

  onDontLike(){
    this.postdontloveIts +=1;
  }

  getColor() {
    if(this.postloveIts > this.postdontloveIts) {
      return 'green';
    } else if (this.postloveIts < this.postdontloveIts) {
      return 'red';
    }
}

}
