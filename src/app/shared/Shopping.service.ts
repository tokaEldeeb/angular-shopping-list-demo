import {Ingredient} from './ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingService{
   public ingredientAdded = new Subject<Ingredient[]>();
   public EditIngredient = new Subject<number>();
   
    ingredients:Ingredient[]=[
            new Ingredient('tomatoes',10),
            new Ingredient('pepper',3)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }
    
    AddIngredient(ingredientDetails :Ingredient){
        this.ingredients.push(new Ingredient(ingredientDetails.name,ingredientDetails.amount));
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
        // ingredientDetails.forEach(element => {
        //     this.ingredients.push(new Ingredient(element.name,element.amount));

        // });
        this.ingredients.push(...ingredientDetails);
    }
}