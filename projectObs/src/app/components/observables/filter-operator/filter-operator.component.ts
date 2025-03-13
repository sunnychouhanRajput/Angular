import { Component } from '@angular/core';
import {filter, of} from "rxjs";

@Component({
  selector: 'filter-operator',
  templateUrl: './filter-operator.component.html',
  styleUrl: './filter-operator.component.scss'
})
export class FilterOperatorComponent {
  public obsResponse: string[] = [];
  public filterListHeader:string = 'Filter Operator Response';
  public filterSyntax:string = `
        of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
          .pipe(
            filter((val) => {
              return val % 2 == 0;
            })
          )
          .subscribe(
             (val) =>{
               console.log(val)
             }
          );
        }
  `;

  /**
   * getFilteredValue
   */
  getFilteredValue(){
    this.obsResponse= [];
    of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
      .pipe(
        filter((val) => {
          return val % 2 == 0;
        })
      )
      .subscribe(
         (val) =>{
           this.obsResponse.push("Filtered Value:" + val);
           console.log(val)
         }
      );
  }
}
