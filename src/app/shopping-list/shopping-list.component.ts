import { Component, OnInit, OnDestroy } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { ShoppingService } from '../shared/Shopping.service';
import {Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
ingredients:Ingredient[];
subscription:Subscription;
  constructor(private shoppingSer: ShoppingService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingSer.getIngredients();
    this.subscription = this.shoppingSer.ingredientAdded.subscribe(
      (ing : Ingredient[]) => this.ingredients = ing
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onEditItem(index :number){
    this.shoppingSer.EditIngredient.next(index);
  }
}
