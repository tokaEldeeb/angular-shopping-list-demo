import {Recipe} from '../recipe/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from './ingredient.model';
import { ShoppingService } from './Shopping.service';
import { Subject } from 'rxjs';
@Injectable()

export class RecipeService{
    constructor(private shoppingSer:ShoppingService){}
    public RecipeSelected = new EventEmitter<Recipe>();
    public recipeChanged = new Subject<Recipe[]>();

    private recipes : Recipe[] = [
        new Recipe('Cake',
        'Recipe for birthday cake',
        'https://www.handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg'
        ,[
            new Ingredient('Flour',1),
            new Ingredient('Chocolate bar',1)
        ]
        ),
        
        new Recipe('Rice',
        'This recipe to prepare a dish of rice',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0FsKNLAgm_L7jzra7M1mhtP9M-RfbcTf2cNy5aMusYP9f2w-pUg&s'
        ,[
            new Ingredient('Salt',2),
            new Ingredient('Rice',1)
        ]
        ),
      
      ];
getRecipes(){
    //here slice to return a copy of recipes not the reference
    return this.recipes.slice();
}

addIngredientToShoppingList(ingredients:Ingredient[]){
    this.shoppingSer.AddIngredients(ingredients);
}
getRecipeById(id:number){
    return this.recipes[id];
}
addNewRecipe(name:string,description:string,image:string){
    this.recipes.push(new Recipe(
        name,description,image,[]
    ));
}
addRecipe(rec : Recipe){
    this.recipes.push(rec);
    this.recipeChanged.next(this.recipes);
}
editRecipeById(index : number,rec:Recipe){
    this.recipes[index]=rec;
    this.recipeChanged.next(this.recipes);
}
deleteRecipeById(id:number){
    this.recipes.splice(id,1);
    this.recipeChanged.next(this.recipes);

}
}