import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-product',
  template: `
  <h2>This is the product page</h2>
  <ul>
  <li (click)="onSelect(prod)" *ngFor="let prod of products">
 {{prod.id  }}
  {{prod.name  }}
  {{prod.price}}
  </li>
  </ul>
  `,
  styles: []
})
export class ProductComponent implements OnInit {

public products=[
  {"id":1, "name":"laptop", "price":100},
  {"id":2, "name":"mouse", "price":150},
  {"id":3, "name":"keyboard", "price":20000},
]

  constructor(private routern: Router) { 

  }

  ngOnInit() {
  }
  onSelect(prod){
    this.routern.navigate(["/products",prod.id]);
  }
}