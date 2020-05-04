import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../shared/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  selectedRecipe : Recipe;
  constructor(private recipeSer : RecipeService) { }

  ngOnInit(): void {
  this.recipeSer.RecipeSelected.subscribe(
    (recipe : Recipe) => this.selectedRecipe = recipe
  );
  this.selectedRecipe = this.recipeSer.getRecipes()[0];
  }


}
