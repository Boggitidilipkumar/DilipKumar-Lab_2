import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cate',
  template:`
  <h2>This is the categeory page</h2>
  <ul class="item">
  <li *ngFor="let categ of categeory">
  <span>{{categ}}</span>
  </li>
  </ul>
  ` ,
  styles: []
})
export class CateComponent implements OnInit {
public categeory=[
  'laptop',
  'mouse',
  'keypoard'
]
  constructor() { }

  ngOnInit() {
  }

}