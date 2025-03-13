import { Component } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {
  public obsResponse:string[] = [];
  public listHeader: string = "Observable Response";


  /**
   * invokeObs1
   */
  invokeObs1(): void {
    this.obsResponse = [];
    const obs1 = new Observable((observer) => {
      console.log('Observable starts => ');
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.next(4);
      observer.next(5);
      observer.next(6);
    });
    obs1.subscribe(
      {
        next: (value) => { //next callback
          console.log("Observable 1 Value : " + value);
          this.obsResponse.push("observable Value : "+ value);
        },
        error: (error) => {  //error callback
          console.log("Observable 1 error : " + error);
          this.obsResponse.push("observable error : "+ error);
        },
        complete: () => {  //complete callback
          console.log("Observable 1 Completed ! ");
          this.obsResponse.push("observable Completed !");
        },
      }
    );

  }

  /**
   * invokeObs2
   */
  invokeObs2(): void {
    this.obsResponse = [];
    const obs2 = new Observable((observer) => {
      console.log('Observable starts  => ');
      setTimeout(() => { observer.next(1) }, 1000);
      setTimeout(() => { observer.next(2) }, 2000);
      setTimeout(() => { observer.next(3) }, 3000);
      setTimeout(() => { observer.next(4) }, 4000);
      setTimeout(() => { observer.next(5) }, 5000);
      setTimeout(() => { observer.next(6) }, 6000);
    });

    obs2.subscribe(
      (value) => {
        console.log("Observable 2 Value : " + value);
        this.obsResponse.push("observable Value : "+ value);
      },
      (error) => {
        console.log("Observable 2 error : " + error);
        this.obsResponse.push("observable error : "+ error);
      },
      () => {
        console.log("Observable  2 Completed ! ");
        this.obsResponse.push("observable Completed !");
      }
    );

  }

  /**
   * errorEvent
   */
  errorEvent(): void {
    this.obsResponse = [];
    const obs = new Observable((observer) => {
      console.log("Observable starts")

      setTimeout(() => { observer.next("1") }, 1000);
      setTimeout(() => { observer.next("2") }, 2000);
      setTimeout(() => { observer.next("3") }, 3000);
      setTimeout(() => { observer.error("error emitted") }, 3500);    //sending error event. observable stops here
      setTimeout(() => { observer.next("4") }, 4000);          //this code is never called
      setTimeout(() => { observer.next("5") }, 5000);

    })

    obs.subscribe(
      (value) => {
        console.log("Observable  Value : " + value);
        this.obsResponse.push("observable Value : "+ value);
      },
      (error) => {
        console.log("Observable  error : " + error);
        this.obsResponse.push("observable error : "+ error);
      },
      () => {
        console.log("Observable   Completed ! ");
        this.obsResponse.push("observable Completed !");
      }
    );

  }

  /**
   * completeEvent
   */
  completeEvent(): void {
    this.obsResponse = [];
    const obs = new Observable((observer) => {
      console.log("Observable starts")

      setTimeout(() => { observer.next("1") }, 1000);
      setTimeout(() => { observer.next("2") }, 2000);
      setTimeout(() => { observer.next("3") }, 3000);
      setTimeout(() => { observer.complete() }, 3500);   //sending complete event. observable stops here
      setTimeout(() => { observer.next("4") }, 4000);    //this code is never called
      setTimeout(() => { observer.next("5") }, 5000);

    });

    obs.subscribe(
      (value) => {
        console.log("Observable  Value : " + value);
        this.obsResponse.push("observable Value : "+ value);
      },
      (error) => {
        console.log("Observable  error : " + error);
        this.obsResponse.push("observable error : "+ error);
      },
      () => {
        console.log("Observable   Completed ! ");
        this.obsResponse.push("observable Completed !");
      }
    );

  }
}
