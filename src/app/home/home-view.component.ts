import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-content',
  templateUrl: 'home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeView implements OnInit {
  
  comments: Array<any>  = [
    {text: "Comment 1", name: 'Joy'},
    {text: "Comment 2", name: 'Jack'},
    {text: "Comment 3", name: 'Marry'}
  ];

  constructor() {}

  ngOnInit() {}
  
}
