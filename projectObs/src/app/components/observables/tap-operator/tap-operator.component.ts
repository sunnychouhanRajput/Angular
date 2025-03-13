import { Component } from '@angular/core';
import {of, tap} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'tap-operator',
  templateUrl: './tap-operator.component.html',
  styleUrl: './tap-operator.component.scss'
})
export class TapOperatorComponent {
 public tapSyntax:string=`
      of(1, 2, 3, 4, 5)
      .pipe(
        tap(val => {
          console.log("before " +val);
        }),
        map(val => {
          return val + 5;
        }),
        tap(val => {
          console.log("after " +val);
        })
      )
      .subscribe(val => console.log(val));
 `;
  public obsResponse: string[] = [];
  public filterListHeader:string = 'Tap Operator Response';
  /**
   * byTapOperator
   */
  byTapOperator(){
    this.obsResponse = [];
    of(1, 2, 3, 4, 5)
      .pipe(
        tap(val => {
          console.log("Before " + val);
          this.obsResponse.push("Before " + val);
        }),
        map(val => {
          if (val == 3) {
            throw Error;
          }
          return val + 5;
        }),
        tap(
          val => {
            console.log("After " + val);
            this.obsResponse.push("After " + val);
          },
          err => {
            console.log("Tap Error");
            this.obsResponse.push("Tap Error");
            console.log(err);
          },
          () => {
            console.log("Tap Complete");
            this.obsResponse.push("Tap Complete");
          }
        )
      )
      .subscribe(val =>{
        console.log(val);
        this.obsResponse.push("Observable Response " + val);
      } );
  }
}
