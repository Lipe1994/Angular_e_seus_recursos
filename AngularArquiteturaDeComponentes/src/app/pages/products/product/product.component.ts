import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Product } from 'src/app/core/models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() 
  product : Product;

  @Output()
  status: EventEmitter<any> = new EventEmitter();
  
  constructor() {
   }

  ngOnInit() {
  }

  event(){
    this.status.emit(this.product);
  }
}
