import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
import { RecipeService } from '../../shared/recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes : Recipe[] ;

  constructor(private recipeSer:RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeSer.getRecipes();
    this.recipeSer.recipeChanged.subscribe((recipes:Recipe[])=>
    this.recipes = recipes);
  }

}
