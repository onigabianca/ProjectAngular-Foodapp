import { Component,Optional, Inject , OnInit} from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MealItemModel } from '../models/meal-item.model';

@Component({
  selector: 'app-meal-item-form',
  templateUrl: './meal-item-form.component.html',
  styleUrls: ['./meal-item-form.component.css']
})
export class MealItemFormComponent implements OnInit{
  mealItemForm = new FormGroup({
    foodItem: new FormControl(" " , Validators.required ),
    calories: new FormControl(" " , Validators.required),
    quantity: new FormControl(" " , Validators.required),
    category: new FormControl(" " , Validators.required),
    typeOfNutrient: new FormControl(" ", Validators.required),
    weight: new FormControl(" " , Validators.required)


  })

  currentMealItem: MealItemModel;

  constructor(
    public dialogRef:MatDialogRef<MealItemFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data:MealItemModel
  ){
    console.log(data);
    this.currentMealItem = data;
  }
  ngOnInit(): void {
    this.mealItemForm.controls.foodItem.setValue(this.currentMealItem.foodItem);
    this.mealItemForm.controls.calories.setValue(this.currentMealItem.calories.toString());
    this.mealItemForm.controls.quantity.setValue(this.currentMealItem.quantity.toString());
    this.mealItemForm.controls.category.setValue(this.currentMealItem.category);
    this.mealItemForm.controls.typeOfNutrient.setValue(this.currentMealItem.typeOfNutrient);
    this.mealItemForm.controls.weight.setValue(this.currentMealItem.weight.toString());
  }

  onSubmit(){
    console.log("submit")
    const updatedMealItem = {
      foodItem : this.mealItemForm.controls.foodItem.getRawValue(),
      calories: this.mealItemForm.controls.calories.getRawValue(),
      quantity: this.mealItemForm.controls.quantity.getRawValue(),
      category: this.mealItemForm.controls.category.getRawValue(),
      typeOfNutrient: this.mealItemForm.controls.typeOfNutrient.getRawValue(),
      weight: this.mealItemForm.controls.weight.getRawValue(),
    }
    this.dialogRef.close({event:'submit',data:updatedMealItem})
  }

  cancel():void {
    this.dialogRef.close();
  }
}
