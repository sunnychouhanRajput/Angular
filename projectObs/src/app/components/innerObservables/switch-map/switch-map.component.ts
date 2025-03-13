import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {debounceTime, fromEvent, Observable, of, Subscription, switchMap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";


@Component({
  selector: 'switch-map',
  templateUrl: './switch-map.component.html',
  styleUrl: './switch-map.component.scss'
})
export class SwitchMapComponent implements AfterViewInit , OnDestroy {
  public obsResponse:string[]=[];
  public switchMapListHeader:string = 'SwitchMap Response';
  public mergeMapSyntax = `
     switchMap(project: (value: T, index: number) => O): OperatorFunction<T, ObservedValueOf<O>>
  `;

  @ViewChild('btnOne', { static: true }) buttonOne!: ElementRef;
  @ViewChild('btnTwo', { static: true }) buttonTwo!: ElementRef;
  @ViewChild('name', { static: true }) name!: ElementRef;

  private buttonSubscriptionOne! :Subscription;
  private buttonSubscriptionTwo! :Subscription;
  private nameSubscription! :Subscription;
  private count :number=0;
  constructor(private http:HttpClient) {}

  ngAfterViewInit() {
    this.buttonClickOne();
    this.buttonClickTwo();
    this.searchEvent();
  }


  /**
   * exampleOne
   */
  exampleOne(){
    let srcObservable= of(1,2,3,4);
    let innerObservable= of('A','B','C','D');
    this.obsResponse = [];
    srcObservable.pipe(
      switchMap( val => {
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
        switchMap(() => {
          this.count=this.count+1;
          return this.delayedObs(this.count);
        })
      )
      .subscribe( val =>{
        console.log(val);
        this.obsResponse.push("value : " + val);
      });

  }


  /**
   * buttonClickTwo
   */
  buttonClickTwo(){
    this.obsResponse = [];
    this.buttonSubscriptionTwo = fromEvent(this.buttonTwo.nativeElement, 'click')
       .pipe(
          switchMap(() => {
            const url:string = 'https://dog.ceo/api/breed/hound/list';
            return this.http.get<any>(url)
          })
        )
        .subscribe( data =>{
          console.log(data);
          this.obsResponse = [...data.message];
        });

  }


  /**
   * getDataByApi
   */
  getDataByApi(){

    of("hound", "mastiff", "retriever")
      .subscribe(breed => {
      const url = 'https://dog.ceo/api/breed/' + breed + '/list';

      this.http.get<any>(url)
        .subscribe(data => {
          console.log(data)
          this.obsResponse = [...data?.message];
        })
    });

  }
  /**
   * getDataBySwitchMap
   */
  getDataBySwitchMap(){
    this.obsResponse=[];
    of("hound", "mastiff", "retriever")        //outer observable
      .pipe(
        switchMap(breed => {
          const url:string = 'https://dog.ceo/api/breed/' + breed + '/list';
          return this.http.get<any>(url)       //inner observable
        })
      )
      .subscribe(data => {
        console.log(data)
        this.obsResponse = [...data.message];
      })
  }

  /**
   * searchEvent
   */
  searchEvent(){
    this.nameSubscription = fromEvent(this.name.nativeElement, 'keyup')
      .pipe(
        debounceTime(300),
        map((event: any) => (event.target as HTMLInputElement).value),// Wait for 300ms after the last keyup before emitting
        switchMap((val)=> {
          const url:string = `https://dog.ceo/api/breed/hound/list?query=${val}`;
          //const url :string = `https://sugg.search.yahoo.net/sg/?output=jsonp&nresults=10&command=${val}`
          return this.http.get<any>(url);       //inner observable
        })
      )
      .subscribe(data => {
        this.obsResponse = [...data.message];
      });
  }


  reset(){
    this.buttonSubscriptionOne?.unsubscribe();
    this.buttonSubscriptionTwo?.unsubscribe();
    this.buttonClickOne();
    this.buttonClickTwo();
    this.count = 0;
  }

  ngOnDestroy() {
    this.buttonSubscriptionOne?.unsubscribe();
    this.buttonSubscriptionTwo?.unsubscribe();
    this.nameSubscription?.unsubscribe();
  }
}
