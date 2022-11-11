import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { IProduct } from './models/product';
import { ModalService } from './services/modal.service';
import { ProductService } from './services/products.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular app';
  term = '';
  loading:boolean = false
  products$: Observable<IProduct[]>

  constructor(
    private productsService: ProductService,
    public modalService: ModalService
    ) {
  }

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productsService.getAll().pipe(
      tap(()=> this.loading = false)
    ),
    catchError(this.errorHandler)
  }

  private errorHandler(error:HttpErrorResponse) {
    return throwError(()=> error.message)
  }
}
