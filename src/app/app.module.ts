import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealItemsComponent } from './meal-items/meal-items.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from  '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { MealItemFormComponent } from './meal-item-form/meal-item-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {NgFor} from '@angular/common';
import {Component} from '@angular/core';

interface typeOfNutrient {
  value: string;
  viewValue: string;
}

@NgModule({
  declarations: [
    AppComponent,
    MealItemsComponent,
    MealItemFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    NgFor,
    
  
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class SelectFormExample {
  selectedValue: string;
  selectedTypeOfNutrient: string;

  @Component({
    selector: 'select-overview-example',
    templateUrl: 'select-overview-example.html',
    standalone: true,
    imports: [MatFormFieldModule, MatSelectModule, NgFor, MatInputModule, FormsModule],
  })

  typeOfNutrients : typeOfNutrient[] = [
    {value: 'Protein-0', viewValue: 'Protein'},
    {value: 'Carbohydrate-1', viewValue: 'Carbohydrate'},
    {value: 'Lipid-2', viewValue: 'Lipid'},
    {value: 'Vitamin-3', viewValue: 'Vitamin'},
  ];}