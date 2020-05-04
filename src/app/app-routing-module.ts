import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { RecipeStartupComponent } from './recipe/recipe-startup/recipe-startup.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';

const routes : Routes = [
    {path:'',redirectTo:'/recipe',pathMatch:'full'},
    {path:'recipe', component : RecipeComponent,children:[
        {path:'',component:RecipeStartupComponent},
        {path:'new',component:RecipeEditComponent},
        {path:':id',component:RecipeDetailsComponent},
        {path:':id/edit',component:RecipeEditComponent}
    ]},
    {path:'shoppingList',component : ShoppingListComponent}
    ];

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})
export class AppRoutingModule{

}