import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId: string;
  productDetails: any; // Adjust the type as per your product details structure

  constructor(private route: ActivatedRoute) {
    this.productId = '';
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params['MGLT'];
      // Fetch product details based on the productId from your API or data source
      // Assign the retrieved product details to the productDetails property
    });
  }
}
