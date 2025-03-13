import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {exhaustMap, fromEvent, Observable, of, Subscription} from "rxjs";

@Component({
  selector: 'exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrl: './exhaust-map.component.scss'
})
export class ExhaustMapComponent implements AfterViewInit ,OnDestroy{
  public obsResponse:string[]=[];
  public exhaustMapListHeader:string = 'MergeMap Response';
  public exhaustMapSyntax = `
  exhaustMap(project: (value: T, index: number) => O): OperatorFunction<T, ObservedValueOf<O>>
  `;

  @ViewChild('btnOne', { static: true }) buttonOne!: ElementRef;
  private buttonSubscriptionOne! :Subscription;
  private count:number=0;

  ngAfterViewInit() {
    this.buttonClickOne();
  }



  /**
   * exampleOne
   */
  exampleOne(){
    let srcObservable= of(1,2,3,4)
    let innerObservable= of('A','B','C','D')
    this.obsResponse = [];
    srcObservable.pipe(
      exhaustMap( val => {
        this.obsResponse.push('Source value '+val);
        this.obsResponse.push('starting new observable');
        return innerObservable
      })
    )
      .subscribe(ret=> {
        this.obsResponse.push('Recd ' + ret);
      })
  }

  /**
   * delayedObs
   * @param count
   */
  delayedObs(count:number) {
    return new Observable((observer) => {
      setTimeout(() => { observer.next(count+" A") }, 1000);
      setTimeout(() => { observer.next(count+" B") }, 2000);
      setTimeout(() => { observer.next(count+" C") }, 3000);
      setTimeout(() => { observer.next(count+" D") }, 4000);
      setTimeout(() => { observer.next(count+" E"); observer.complete() }, 5000);
    })
  }

  /**
   * buttonClickTwo
   */
  buttonClickOne(){
    this.obsResponse = [];
    this.buttonSubscriptionOne = fromEvent(this.buttonOne.nativeElement, 'click')
      .pipe(
        exhaustMap(() => {
          this.count=this.count+1;
          return this.delayedObs(this.count);
        })
      )
      .subscribe( val =>{
        console.log(val);
        this.obsResponse.push("value : " + val);
      });

  };

  reset(){
    this.buttonSubscriptionOne?.unsubscribe();
    this.buttonClickOne();
    this.count = 0;
  }

  ngOnDestroy() {
    this.buttonSubscriptionOne?.unsubscribe();
  };
}
