import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealItemsComponent } from './meal-items/meal-items.component';


const routes:Routes = [{path:'mealItems', component:MealItemsComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
