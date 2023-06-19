import { Component } from '@angular/core';
import { ProductService } from '../app/product-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(private productService: ProductService) { }

  products: any;
  currentPage: number = 1;
  pageSize: number = 10;
  totalItems!: number;
  totalPages!: number;

  ngOnInit(): void {
    
    this.loadPaginatedProducts(this.currentPage);
  }
  
  loadPaginatedProducts(page: number) {
    this.productService.getPaginatedProducts(page, this.pageSize).subscribe(
      (data) => {
        this.products = data.results;
        this.totalItems = data.count;
        this.totalPages = Math.ceil(this.totalItems / this.pageSize);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadPaginatedProducts(this.currentPage);
    }
  }
  
  
}
