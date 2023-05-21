import { Component, OnInit , ViewChild} from '@angular/core';
import { MealItemsApiService } from '../services/meal-items-api.service';
import { MealItemModel } from '../models/meal-item.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-meal-items',
  templateUrl: './meal-items.component.html',
  styleUrls: ['./meal-items.component.css']
})
export class MealItemsComponent implements OnInit {
  @ViewChild (MatPaginator) paginator : MatPaginator;

  displayedColumns: string[] = ['id','foodItem', 'calories', 'quantity', 'category','typeOfNutrient','weight','actions'];
  dataSource : any;


  constructor(private mealItemsApi: MealItemsApiService){

  }

 
  ngOnInit(): void {
    this.mealItemsApi.getAll().subscribe(res =>{
      console.log(res);
      this.dataSource = new MatTableDataSource<MealItemModel>(res.map((mealItem:any)=>{
        return{
          id: mealItem.id,
          foodItem: mealItem.foodItem,
          calories: mealItem.calories,
          quantity: mealItem.quantity,
          category: mealItem.category,
          typeOfNutrients: mealItem.nutrients.typeOfNutrient,
          weight: mealItem.nutrients.weight


        }
     
      }));

      this.dataSource.paginator=this.paginator;
      });
    }

   
  update():void{
    console.log("UPDATE!")
  
  }

  }
