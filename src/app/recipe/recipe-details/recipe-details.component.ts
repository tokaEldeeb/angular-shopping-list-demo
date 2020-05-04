import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../shared/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
selectedRecipe : Recipe;
index:number;
  constructor(private recipeSer:RecipeService,private activeRoute:ActivatedRoute
    ,private route:Router) { }

  ngOnInit(): void {
    const recipeId = this.activeRoute.snapshot.params['id'];
    this.selectedRecipe = this.recipeSer.getRecipes()[recipeId];
    this.activeRoute.params.subscribe((param:Params) => {
      this.selectedRecipe = this.recipeSer.getRecipes()[param['id']] ;
      this.index = +param['id'];
    }
    );
  }
  addToShopping(){
    this.recipeSer.addIngredientToShoppingList(this.selectedRecipe.Ingredints);
  }
  DeleteRecipe(){
    this.recipeSer.deleteRecipeById(this.index);
    this.route.navigate(["/recipe"]);
  }
}
