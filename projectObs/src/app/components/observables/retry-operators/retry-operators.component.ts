import { Component } from '@angular/core';
import {delay, filter, interval, of, retry, retryWhen, scan, switchMap, take, tap} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'retry-operators',
  templateUrl: './retry-operators.component.html',
  styleUrl: './retry-operators.component.scss'
})
export class RetryOperatorsComponent {
  public listHeader:string = 'Observable Response';
  public obsResponse:string[] = [];


  /**
   * retryExample
   */
  retryExample(){
     const obs =  interval(1000);
     this.obsResponse = [];
     obs.pipe(
        map(val => {
          if (val > 2){
            this.obsResponse.push("Error Invalid Value");
            throw new Error("Invalid Value");
          }
          return val;
        }),
        retry(2)
      )
      .subscribe(
        val => {
          console.log(val);
          this.obsResponse.push("Observable Value : " + val);
        },
        err =>{
          console.log(err);
          this.obsResponse.push("Observable error : " + err);
        } ,
        () =>{
          console.log("Complete");
          this.obsResponse.push("Observable Completed  ");
        }
      );
  }

  /**
   * retryWhenExample
   */
  retryWhenExample(){
    const obs =  interval(1000);
    this.obsResponse = [];
    obs.pipe(
        map(val => {
          if (val > 2){
            this.obsResponse.push("Invalid Value");
            throw new Error("Invalid Value");
          }
          return val;
        }),
        retryWhen((errors) =>
          errors.pipe(
            scan((acc, error) => {
              if (acc > 2) throw error;
              console.log("attempt " + acc);
              this.obsResponse.push("attempt " + acc);
              return acc + 1;
            }, 1),
            delay(3000),
            tap(() =>{
              this.obsResponse.push("Retrying ...");
              console.log("Retrying ...");
            })
          )
        )
      )
      .subscribe({
        next: val => {
          this.obsResponse.push("Observable Value: " + val);
          console.log("Value:", val);
        },
        error: err => {
          console.error("Error:", err);
          this.obsResponse.push("Observable Error: " + err.message);
        },
        complete: () => {
          this.obsResponse.push("Complete");
          console.log("Complete");
        }
      }
      );
  }


  /**
   * retryWhenExample
   */
  retryWhenExampleTwo(){
    const obs =  interval(1000);
    this.obsResponse = [];
      obs.pipe(
        map(val => {
          if (val > 2){
            this.obsResponse.push("Network Error");
            throw new Error("Network Error");
          }
          return val;
        }),
        retryWhen(errors =>
          errors.pipe(
            filter(error => error.message === 'Network Error'), // Retry only on network errors
            delay(1000), // Retry after 1 second
            tap(() =>{
              this.obsResponse.push("Retrying ...");
              console.log("Retrying ...");
            }),
            take(2) // Stop after 2 retries
          )
        )
      )
      .subscribe(
        val =>{
          this.obsResponse.push("Observable Value :" + val);
          console.log(val);
        } ,
        err => {
          console.error(err);
          this.obsResponse.push("Observable Error :" + err);
        },
        () =>{
          console.log("Complete");
          this.obsResponse.push("Complete");
        }
      );

  }


  /**
   * reset
   */
  reset(){
    this.obsResponse = [];
  }
}
