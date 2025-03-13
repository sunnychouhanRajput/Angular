import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {forkJoin, fromEvent, interval, mergeMap, Observable, of, Subscription, switchMap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'merge-map',
  templateUrl: './merge-map.component.html',
  styleUrl: './merge-map.component.scss'
})
export class MergeMapComponent implements AfterViewInit , OnDestroy{
  public obsResponse:string[]=[];
  public mergeMapListHeader:string = 'MergeMap Response';
  public mergeMapSyntax = `
    mergeMap(project: (value: T, index: number) => O): OperatorFunction<T, ObservedValueOf<O>>
  `;

  @ViewChild('btnOne', { static: true }) buttonOne!: ElementRef;
  private buttonSubscriptionOne! :Subscription;
  private count:number=0;
  constructor(private http:HttpClient) {}

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
      mergeMap( val => {
        this.obsResponse.push('Source value '+val);
        this.obsResponse.push('starting new observable');
        return innerObservable;
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
        mergeMap(() => {
          this.count=this.count+1;
          return this.delayedObs(this.count)
        })
      )
      .subscribe( val =>{
        console.log(val);
        this.obsResponse.push("value : " + val);
      });

  };

  /**
   * getDataBySwitchMap
   */
  getDataByMergeMap(){
    this.obsResponse = [];
    of("hound", "mastiff", "retriever")        //outer observable
      .pipe(
        mergeMap(breed => {
          const url:string = 'https://dog.ceo/api/breed/' + breed + '/list';
          return this.http.get<any>(url)       //inner observable
        })
      )
      .subscribe(data => {
        console.log(data)
        this.obsResponse = [...this.obsResponse,...data.message];
      })
  }

  /**
   * MergeHTTPRequestWithFork
   * @constructor
   */
  mergeWithFork() {

    //const url='https://dog.ceo/api/breed/'+hound+'/list';
    this.obsResponse = [];
    of("hound", "mastiff", "retriever")
      .pipe(
        mergeMap(breed => {
          const url1:string = 'https://dog.ceo/api/breed/' + breed + '/list';
          const url2:string = 'https://dog.ceo/api/breed/' + breed + '/images/random';

          let obs1:Observable<any>= this.http.get<any>(url1);
          let obs2:Observable<any>= this.http.get<any>(url2);

          return forkJoin([obs1,obs2]);

        })
      )
      .subscribe((data:any) => {
        console.log(data);
        this.obsResponse = [...this.obsResponse,...data[0].message];
      })

  }

  reset(){
    this.buttonSubscriptionOne?.unsubscribe();
    this.buttonClickOne();
    this.count = 0;
  }

  ngOnDestroy() {
    this.buttonSubscriptionOne?.unsubscribe();
  };
}
