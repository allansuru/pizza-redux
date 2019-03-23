import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Pizza } from '../../models/pizza.model';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';


@Component({
  selector: 'products',
  styleUrls: ['products.component.scss'],
  template: `
    <div class="products">
      <div class="products__new">
        <a
          class="btn btn__ok" 
          routerLink="./new">
          New Pizza
        </a>
      </div>
      <div class="products__list">
        <div *ngIf="!((pizzas$ | async)?.length)">
          No pizzas, add one to get started.
        </div>
        <pizza-item
          *ngFor="let pizza of (pizzas$) | async"
          [pizza]="pizza">
        </pizza-item>
      </div>
    </div>
  `,
})
export class ProductsComponent implements OnInit {
  pizzas: Pizza[];
  pizzas$: Observable<Array<Pizza>>;

  constructor(private store: Store<fromStore.ProductState>) {}

  ngOnInit() {
     // this.store.select<any>(fromStore.getAllPizzas).subscribe(state => this.pizzas = state);
    this.pizzas$ = this.store.select<any>(fromStore.getAllPizzas);
  }
}
