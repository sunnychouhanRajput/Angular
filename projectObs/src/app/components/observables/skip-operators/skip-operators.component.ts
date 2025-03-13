import { Component } from '@angular/core';
import {
  interval,
  of,
  range,
  skip, skipLast,
  skipUntil, skipWhile,
  Subject,
  Subscription,
  take,
  takeLast,
  takeUntil,
  takeWhile, tap,
  timer
} from "rxjs";

@Component({
  selector: 'skip-operators',
  templateUrl: './skip-operators.component.html',
  styleUrl: './skip-operators.component.scss'
})
export class SkipOperatorsComponent {
  public listHeader:string = 'Observable Response';
  public obsResponse:string[] = [];
  public  stopObservable :boolean = false;

  /**
   * skipOperator
   */
  skipOperator(){
    this.obsResponse = [];
    const obs =   of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
      .pipe(
        skip(5),
      );
    obs.subscribe(val => {
      console.log(val)
      this.obsResponse.push("observable Value : " + val);
    });
  }

  /**
   * skipUntilOperator
   */
  skipUntilOperator(){
    this.obsResponse = [];
    this.stopObservable = false;
    const obs =  interval(1000)
      .pipe(
        skipUntil(timer(4000)),
      );
    const subscription :Subscription = obs.subscribe(val => {
      console.log(val)
      this.obsResponse.push("observable Value : " + val);
      if(this.stopObservable){
        subscription.unsubscribe();
      }
    });

  }

  /**
   * stopObs
   */
  stopObs() {
    this.stopObservable = true;
  }


  /**
   * skipWhileOperator
   */
  skipWhileOperator(){
    this.obsResponse = [];
    const obs =  of( 2, 4, 5, 6, 7, 8, 9, 10)
      .pipe(
        skipWhile(val => val % 2==0),
      );

    obs.subscribe(val => {
      console.log(val)
      this.obsResponse.push("observable Value : " + val);
    });
  }

  /**
   * skipLastOperator
   */
  skipLastOperator(){
    this.obsResponse = [];
    const obs =    of(1,2,3,4,5,6,7,8,9,10)
      .pipe(
        tap(val => {
          console.log("tap " + val);
        }),
        skipLast(5)
      );

    obs.subscribe(val => {
      console.log(val)
      this.obsResponse.push("observable Value : " + val);
    });
  }

  /**
   * reset
   */
  reset(){
    this.obsResponse = [];
  }

}
