import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
 private orderCount:BehaviorSubject<any> = new BehaviorSubject({
   cartTotal:0,
   favouriteTotal:0
 });
  private orderCount$ =  this.orderCount.asObservable();

  getOrderCount():Observable<any>{
    return this.orderCount$;
  }

  setOrderCount(latestValue:any){
     return this.orderCount.next(latestValue);
  }
}
