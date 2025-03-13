import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {fromEvent, of, reduce, scan, Subject, Subscription} from "rxjs";

@Component({
  selector: 'scan-reduce-operators',
  templateUrl: './scan-reduce-operators.component.html',
  styleUrl: './scan-reduce-operators.component.scss'
})
export class ScanReduceOperatorsComponent  implements AfterViewInit, OnDestroy{
  public listHeader:string = 'Observable Response';
  public obsResponse:string[] = [];
  @ViewChild("btn", { static: true }) button!: ElementRef;
  public clickStream!: Subject<Event>;
  public btnSub!: Subscription;
  public btnReduceSub!: Subscription;

  ngAfterViewInit() {
    this.scanOperatorEx2();
    this.reduceOperatorEx2();
  }
  /**
   * scanOperatorEx1
   */
  scanOperatorEx1(){
    this.obsResponse = [];
    const obs =   of(1, 2, 3, 4, 5)
      .pipe(
        scan(( acc, value) => {
          return acc + value
        }, 10),
      );
    obs.subscribe(val => {
      console.log(val)
      this.obsResponse.push("observable Value : " + val);
    });
  }

  /**
   * scanOperatorEx2
   */
  scanOperatorEx2(){
    this.obsResponse = [];
    this.btnSub = fromEvent(this.button.nativeElement, "click")
      .pipe(scan((acc, value) =>{
        return  acc + 1;
      }, 0))
      .subscribe(val =>{
        console.log("You clicked " + val + " times");
        this.obsResponse.push("You clicked " + val + " times");
      });
  }


  /**
   * reduceOperatorEx1
   */
  reduceOperatorEx1(){
    this.obsResponse = [];
    const obs =   of(1, 2, 3, 4, 5)
      .pipe(
        reduce(( acc, value) => {
          return acc + value
        }, 10),
      );
    obs.subscribe(val => {
      console.log(val)
      this.obsResponse.push("observable Value : " + val);
    });
  }

  /**
   * reduceOperatorEx2
   */
  reduceOperatorEx2(){
    this.clickStream = new Subject<Event>();
    this.obsResponse = [];
    this.btnReduceSub = this.clickStream
      .asObservable()
      .pipe(
        reduce((acc, value) => {
          return acc + 1;
        }, 0)
      )
      .subscribe(val =>{
        console.log("You clicked " + val + " times");
        this.obsResponse.push("You clicked " + val + " times");
      } );
  }

  /**
   * clickMe
   * @param event
   */
  clickMe(event: Event) {
    console.log("Clicked");
    if (this.clickStream) this.clickStream.next(event);
  }

  /**
   * stopCounting
   */
  stopCounting() {
    this.clickStream.complete();
  }

  /**
   * reset
   */
  reset(){
    this.obsResponse = [];
  }

  ngOnDestroy() {
     this.btnSub?.unsubscribe();
    this.btnReduceSub?.unsubscribe();
  }

}
