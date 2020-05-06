import {Ingredient} from './ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingService{
   public ingredientAdded = new Subject<Ingredient[]>();
   public EditIngredient = new Subject<number>();
   
    ingredients:Ingredient[]=[
            new Ingredient('Tomatoes',10),
            new Ingredient('Pepper',3)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }
    
    AddIngredient(ingredientDetails :Ingredient){
        let ingredient = this.ingredients.filter(x => x.name == ingredientDetails.name)[0];
        if(ingredient){
          ingredient.amount += ingredientDetails.amount;
        }
        else{
            this.ingredients.push(new Ingredient(ingredientDetails.name,ingredientDetails.amount));
        }
        
        this.ingredientAdded.next(this.ingredients.slice());
    }

    EditIngredientByIndex(index : number,ingredientDetails :Ingredient){
        this.ingredients[index] = ingredientDetails;
        this.ingredientAdded.next(this.ingredients.slice());
    }
    DeleteIngredientByIndex(index:number){
        this.ingredients.splice(index,1);
        this.ingredientAdded.next(this.ingredients.slice());
    }
    AddIngredients(ingredientDetails :Ingredient[]){
         ingredientDetails.forEach(element => {
            this.AddIngredient(element);
         });
       
    }
}