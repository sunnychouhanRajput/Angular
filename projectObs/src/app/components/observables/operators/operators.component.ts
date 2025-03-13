import { Component } from '@angular/core';
import {filter, Observable, pipe, tap} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrl: './operators.component.scss'
})
export class OperatorsComponent {
  public obsResponse: string[] = [];
  public pipeListHeader: string = 'Pipe method response';
  public pipeSyntax:string= `
     obs.pipe(
        operator1(),
        operator2(),
        operator3(),
        operator3(),
     )
    `;

  public   customOperator = pipe(
      tap(data => console.log('tap '+data)),
      filter(data => data as number > 2),
      tap(data => console.log('filter '+data)),
      map((val) => {
        return val as number * 2
      }),
      tap(data => console.log('final '+data)),
 );

  /**
   * pipeAsInstanceMethod
   */
  pipeAsInstanceMethod():void{
    this.obsResponse = [];
    const obs = new Observable((observer) => {
      setTimeout(() => { observer.next(1) }, 1000);
      setTimeout(() => { observer.next(2) }, 2000);
      setTimeout(() => { observer.next(3) }, 3000);
      setTimeout(() => { observer.next(4) }, 4000);
      setTimeout(() => { observer.next(5) }, 5000);
      setTimeout(() => { observer.next(6) }, 6000);
      setTimeout(() => { observer.complete() }, 7000);
    }).pipe(
      tap(data => console.log('tap '+data)),           //tap
      filter(data => data as number > 2),                        //filter
      tap(data => console.log('filter '+data)),        //tap
      map((val) => { return val as number * 2 }),      //map
      tap(data => console.log('final '+data)),
    );

    obs.subscribe(
      (value: any) => {
        console.log("Observable  Value : " + value);
        this.obsResponse.push("observable Value : " + value);
      }
    );
  }

  /**
   * pipeAsInstanceMethod
   */
  pipeAsStandAlone():void{
    this.obsResponse = [];
    const obs = new Observable((observer) => {
      setTimeout(() => { observer.next(1) }, 1000);
      setTimeout(() => { observer.next(2) }, 2000);
      setTimeout(() => { observer.next(3) }, 3000);
      setTimeout(() => { observer.next(4) }, 4000);
      setTimeout(() => { observer.next(5) }, 5000);
      setTimeout(() => { observer.next(6) }, 6000);
      setTimeout(() => { observer.complete() }, 7000);
    }).pipe(
      this.customOperator,
      tap(data => console.log('final '+data)),
    );

    obs.subscribe(
      (value: any) => {
        console.log("Observable  Value : " + value);
        this.obsResponse.push("observable Value : " + value);
      }
    );
  }

}
