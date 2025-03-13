import { Component } from '@angular/core';
import {interval, of, range, Subject, take, takeLast, takeUntil, takeWhile} from "rxjs";

@Component({
  selector: 'take-operators',
  templateUrl: './take-operators.component.html',
  styleUrl: './take-operators.component.scss'
})
export class TakeOperatorsComponent {
  public listHeader:string = 'Observable Response';
  public obsResponse:string[] = [];
  public  notifier! :Subject<any>;

  /**
   * takeOperator
   */
  takeOperator(){
    this.obsResponse = [];
    const obs = of(1, 2, 3, 4, 5).pipe(take(2));
    obs.subscribe(val => {
      console.log(val)
      this.obsResponse.push("observable Value : " + val);
    });
  }

  /**
   * takeUntilOperator
   */
  takeUntilOperator(){
    this.obsResponse = [];
    this.notifier = new Subject();
    const obs =  interval(1000).pipe(takeUntil(this.notifier));
    obs.subscribe(val => {
      console.log(val)
      this.obsResponse.push("observable Value : " + val);
    });
  }

  /**
   * stopObs
   */
  stopObs() {
    this.notifier.next(null);
    this.notifier.complete();
  }


  /**
   * takeOperator
   */
  takeWhileOperator(){
    this.obsResponse = [];
    const obs = of(1, 2, 3, 1, 2, 3, 1, 2, 3)
      .pipe(
        takeWhile(val => val < 3)
      );

    obs.subscribe(val => {
      console.log(val)
      this.obsResponse.push("observable Value : " + val);
    });
  }

  /**
   * takeLastOperator
   */
  takeLastOperator(){
    this.obsResponse = [];
    const obs = range(1, 100).pipe(takeLast(3));

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
