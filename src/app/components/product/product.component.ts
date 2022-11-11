import { getLocaleCurrencyCode } from "@angular/common";
import { Component, Input } from "@angular/core";
import { provideProtractorTestingSupport } from "@angular/platform-browser";
import { IProduct } from "src/app/models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input('product') products: IProduct
  details: boolean = false
}

