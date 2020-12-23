import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap} from '@angular/router';
@Component({
  selector: 'app-product-detail',
  template: `
  <h2>This is the product id you selected {{productId}}</h2>
  `,
  styles: []
})
export class ProductDetailComponent implements OnInit {
public productId;
  constructor(private rout: ActivatedRoute) { }

  ngOnInit() {
    let id=parseInt(this.rout.snapshot.paramMap.get('id'));
this.productId=id;
  }

}