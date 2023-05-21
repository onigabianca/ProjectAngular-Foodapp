import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


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

  /*updateMealItem(id:number, request: MealItemModel): Observable<any> {
    return this.httpClient.put(this.url + "/" + id, request);
  }

  addMealItem(request: MealItemModel): Observable<any> {
    return this.httpClient.post(this.url , request);
  }

  deleteMealItem(id:number): Observable<any> {
    return this.httpClient.delete(this.url + "/" + id);
  }
}
*/
}
