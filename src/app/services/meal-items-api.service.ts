import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MealItemModel } from '../models/meal-item.model';


@Injectable({
  providedIn: 'root'
})
export class MealItemsApiService {
  private url:string="http://localhost:8080/mealItems"

  constructor(private httpClient: HttpClient) { }
  getAll():Observable <any>{
    var result = this.httpClient.get(this.url);
    return result;
  }

  updateMealItem(id:number, request: MealItemModel): Observable<any> {
    return this.httpClient.put(this.url + "/" + id, request);
  }

  deleteMealItem(id:string): Observable<any> {
      return this.httpClient.delete(this.url + "/" + id, {
      
      }
      );
    }
}
