import { Component,Optional, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-meal-item-form',
  templateUrl: './meal-item-form.component.html',
  styleUrls: ['./meal-item-form.component.css']
})
export class MealItemFormComponent {
  mealItemForm = new FormGroup({
    foodItem: new FormControl(" "),
    calories: new FormControl(" "),
    quantity: new FormControl(" "),
    category: new FormControl(" "),
    typeOfNutrient: new FormControl(" "),
    weight: new FormControl(" ")


  })

  constructor(
    public dialogRef:MatDialogRef<MealItemFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data:any
  ){
    console.log(data);
  }

  cancel():void {
    this.dialogRef.close();
  }
}
