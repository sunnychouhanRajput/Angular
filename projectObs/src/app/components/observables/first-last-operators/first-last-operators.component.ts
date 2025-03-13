import { Component } from '@angular/core';
import {first, interval, last, of, single} from "rxjs";

@Component({
  selector: 'first-last-operators',
  templateUrl: './first-last-operators.component.html',
  styleUrl: './first-last-operators.component.scss'
})
export class FirstLastOperatorsComponent {
  public listHeader:string = 'Observable Response';
  public obsResponse:string[] = [];

  /**
   * takeOperator
   */
  fistOperator(){
    this.obsResponse = [];
    const   obs = of(1, 2, 3, 4, 5).pipe(
      first(val => val > 3)
    );
    obs.subscribe(val => {
      console.log(val)
      this.obsResponse.push("observable Value : " + val);
    });
  }


  /**
   * fistOperatorNoValue
   */
  fistOperatorNoValue(){
    this.obsResponse = [];
    const   obs = of(1, 2, 3, 4, 5).pipe(
      first(val => val > 10 , 100)
    );
    obs.subscribe(
      val => {
              console.log(val)
              this.obsResponse.push("observable Value : " + val);
          },
      (error)=>{
             this.obsResponse.push("observable error : " + error);
          }
    );
  }

  /**
   * takeOperator
   */
  lastOperator(){
    this.obsResponse = [];
    const   obs = of(1, 2, 3, 4, 5).pipe(
      last(val => val < 3)
    );
    obs.subscribe(val => {
      console.log(val)
      this.obsResponse.push("observable Value : " + val);
    });
  }


  /**
   * fistOperatorNoValue
   */
  lastOperatorNoValue(){
    this.obsResponse = [];
    const   obs = of(1, 2, 3, 4, 5).pipe(
      last(val => val < 0 , 100)
    );
    obs.subscribe(
      val => {
        console.log(val)
        this.obsResponse.push("observable Value : " + val);
      },
      (error)=>{
        this.obsResponse.push("observable error : " + error);
      }
    );
  }


  /**
   * singleOperator
   */
  singleOperator(){
    this.obsResponse = [];
    const   obs = of(1, 2, 3, 4, 5).pipe(
      single(val => val == 3)
    );
   // const obs = interval(1000).pipe(single(val => val == 3));
    obs.subscribe(val => {
      console.log(val)
      this.obsResponse.push("observable Value : " + val);
    });
  }


  /**
   * singleOperatorMultipleValue
   */
  singleOperatorMultipleValue(){
    this.obsResponse = [];
    const   obs = of(1, 2, 3, 4, 3).pipe(
      single(val => val == 3)
    );
    // const obs = of(1, 2, 3, 4, 3).pipe(
    //   single()
    // );

    // const   obs =  of(1, 2, 3, 4, 3).pipe(
    //   single(val => val == 5)
    // );

    obs.subscribe(
      val => {
        console.log(val)
        this.obsResponse.push("observable Value : " + val);
      },
      (error)=>{
        this.obsResponse.push("observable error : " + error);
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

