import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  posts: [
  {
    title: 'Mon premier post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis turpis, fringilla vel urna quis, congue interdum ante. Vestibulum nec ipsum et metus sagittis elementum. Aliquam ullamcorper, neque eget placerat bibendum, augue quam bibendum odio, at aliquam mi est sit amet diam. Suspendisse orci est, mollis non luctus eget, mollis congue ligula. ',
    postloveIts: 0,
    postdontlovesIts: 0,
    created_at: Date
  },
  {
    title: 'Mon second post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis turpis, fringilla vel urna quis, congue interdum ante. Vestibulum nec ipsum et metus sagittis elementum. Aliquam ullamcorper, neque eget placerat bibendum, augue quam bibendum odio, at aliquam mi est sit amet diam. Suspendisse orci est, mollis non luctus eget, mollis congue ligula. ',
    postloveIts: 0,
    postdontlovesIts: 0,
    created_at: Date
  },
  {
    title: 'Mon dernier post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis turpis, fringilla vel urna quis, congue interdum ante. Vestibulum nec ipsum et metus sagittis elementum. Aliquam ullamcorper, neque eget placerat bibendum, augue quam bibendum odio, at aliquam mi est sit amet diam. Suspendisse orci est, mollis non luctus eget, mollis congue ligula. ',
    postloveIts: 0,
    postdontlovesIts: 0,
    created_at: Date
  }
];
}
