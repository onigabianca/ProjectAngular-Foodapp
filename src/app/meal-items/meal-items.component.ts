import { Component, OnInit , ViewChild} from '@angular/core';
import { MealItemsApiService } from '../services/meal-items-api.service';
import { MealItemModel } from '../models/meal-item.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MealItemFormComponent } from '../meal-item-form/meal-item-form.component';

@Component({
  selector: 'app-meal-items',
  templateUrl: './meal-items.component.html',
  styleUrls: ['./meal-items.component.css']
})
export class MealItemsComponent implements OnInit {
  @ViewChild (MatPaginator) paginator : MatPaginator;

  displayedColumns: string[] = ['id','foodItem', 'calories', 'quantity', 'category','typeOfNutrient','weight','actions'];
  dataSource : any;


  constructor(private mealItemsApi: MealItemsApiService, private dialogRef: MatDialog){

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

  
   
  openDialog (mealItem: MealItemModel):void{
    const dialogRef=this.dialogRef.open(MealItemFormComponent,{
      width:'250px',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data:mealItem
    })
    dialogRef.afterClosed().subscribe(result =>{
      if(result.event === 'submit'){
        console.log(result.data)
      }
    });
  
  }

  }
