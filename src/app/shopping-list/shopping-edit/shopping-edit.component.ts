import { Component, OnInit,Output,EventEmitter,ViewChild ,ElementRef} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import { ShoppingService } from '../../shared/Shopping.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild ('f') form:NgForm;
name:string="name";
amount:number=0;
editFlag = false;
ItemIndex:number;
  constructor(private shoppingSer : ShoppingService) { }

  ngOnInit(): void {
    this.shoppingSer.EditIngredient.subscribe((index:number) => {
        this.editFlag = true;
        this.ItemIndex = index;
        this.form.setValue({'name' : this.shoppingSer.getIngredients()[index].name,
            'amount' : this.shoppingSer.getIngredients()[index].amount}) ;
    });
  }
  onAddClick(form:NgForm){
    if(this.editFlag){
      this.shoppingSer.EditIngredientByIndex(this.ItemIndex,
        new Ingredient(
          form.value.name,form.value.amount
        ));
    }
    else
    this.shoppingSer.AddIngredient(new Ingredient(
      form.value.name,form.value.amount));
    
    this.editFlag=false;
    this.form.reset();
  }
  clearItem(){
    this.form.reset();
    this.editFlag = false;
  }
  DeleteItem(){
    this.shoppingSer.DeleteIngredientByIndex(this.ItemIndex);
    this.clearItem();
  }
}
