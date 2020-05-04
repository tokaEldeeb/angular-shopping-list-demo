import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeService } from '../../shared/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Recipe } from '../recipe.model';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit,OnDestroy {
//recipe model vars
formObj:FormGroup;
editMode = false;
id:number;
formSubsribtion : Subscription;
editButtonText="Add new recipe";
  constructor(private recipeSer:RecipeService
    ,private route:ActivatedRoute,private routeHelp:Router) { }

  ngOnInit(): void {
    this.formSubsribtion = this.route.params.subscribe(
      (param : Params) =>{
        this.id = +param['id'];
        this.editMode = param['id'] != null;
        this.editButtonText = param['id'] != null ? "Edit recipe" : "Add new recipe";
        this.initForm();
      }
    );
  }
AddEditRecipe(){
  let rec = new Recipe(
    this.formObj.get('name').value,
    this.formObj.get('description').value,
    this.formObj.get('imagePath').value,
    (<FormArray>this.formObj.get('Ingredints')).value
  );
  if(this.editMode){
       // this.AddNewRecipe(rec);
    this.recipeSer.editRecipeById(this.id,this.formObj.value);
  }
  else{
        //this.EditRecipe(rec);
    //you can just use the formobj value
    this.recipeSer.addRecipe(this.formObj.value);
  }
  this.onCancel();
}
AddNewRecipe(rec:Recipe){
this.recipeSer.addRecipe(rec);
}
EditRecipe(rec:Recipe){
this.recipeSer.editRecipeById(this.id,rec)
}
initForm(){
 let nameDef = '';
 let descriptionDef = '';
 let imageDef = '';
 let ingredientDef = new FormArray([]);
 if(this.editMode){
   nameDef = this.recipeSer.getRecipeById(this.id).name;
   descriptionDef = this.recipeSer.getRecipeById(this.id).description;
   imageDef = this.recipeSer.getRecipeById(this.id).imagePath;
   if(this.recipeSer.getRecipeById(this.id).Ingredints){
    this.recipeSer.getRecipeById(this.id).Ingredints.forEach(element => {
        ingredientDef.push(new FormGroup({
          'name':new FormControl(element.name,Validators.required),
          'amount':new FormControl(element.amount,[Validators.required,Validators.pattern('^[0-9]+[0-9]*$')])
        }));
      });
   }
 }
this.formObj = new FormGroup({
  'name' : new FormControl(nameDef,Validators.required),
  'description':new FormControl(descriptionDef,Validators.required),
  'imagePath' : new FormControl(imageDef,Validators.required),
  'Ingredints':ingredientDef
});
}
AddIngredientRow(){
  (<FormArray> this.formObj.get('Ingredints')).push(new FormGroup({
    'name':new FormControl(null,Validators.required),
    'amount':new FormControl(null,[Validators.required,Validators.pattern('^[0-9]+[0-9]*$')])
  }));
}
onCancel(){
  this.routeHelp.navigate(["../"],{relativeTo:this.route});
}
onDeleteIngeredient(index:number){
  (<FormArray>this.formObj.get("Ingredints")).removeAt(index);
}
ngOnDestroy(){
  this.formSubsribtion.unsubscribe();
}
}
