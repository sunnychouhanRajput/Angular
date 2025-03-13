import { Component } from '@angular/core';
import { Observable, of, from } from "rxjs";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent  {
  public obsResponse: string[] = [];
  public createListHeader: string = 'create method response';
  public ofListHeader: string = 'Of Operator response';
  public fromListHeader: string = 'From Operator response';
  public creatCode: string = `
    const obsUsingCreate = Observable.create( observer => {
       observer.next( '1' )
       observer.next( '2' )
       observer.next( '3' )

       observer.complete()
     })
  `;
  public ofCode: string = `
    const array=[1,2,3,4,5,6,7]
    const obsof1=of(array);
    obsof1.subscribe(
      val => console.log(val),
      error=> console.log("error"),
      () => console.log("complete")
    )
  `;
  public fromCode: string = `
   const array3 = [1, 2, 3, 4, 5, 6, 7]
   const obsfrom1 = from(array3);
   obsfrom.subscribe(
      val => console.log(val),
      error => console.log("error"),
      () => console.log("complete")
   );
  `;





  /**
   * onTabChange
   * @param event
   */
  onTabChange(event: any) {
    this.obsResponse = [];
  }



  /**
   * byCreateMethod
   */
  byCreateMethod(): void {
    this.obsResponse = [];
    const obs1 = Observable.create((observer: any) => {
      console.log('Observable starts => ');
      setTimeout(() => { observer.next(1) }, 1000);
      setTimeout(() => { observer.next(2) }, 2000);
      setTimeout(() => { observer.next(3) }, 3000);
      setTimeout(() => { observer.next(4) }, 4000);
      setTimeout(() => { observer.next(5) }, 5000);
      setTimeout(() => { observer.next(6) }, 6000);
      setTimeout(() => { observer.complete() }, 7000);
    });
    obs1.subscribe(
      {
        next: (value: any) => {
          console.log("Observable  Value : " + value);
          this.obsResponse.push("observable Value : " + value);
        },
        error: (error: any) => {
          console.log("Observable  error : " + error);
          this.obsResponse.push("observable error : " + error);
        },
        complete: () => {
          console.log("Observable   Completed ! ");
          this.obsResponse.push("observable Completed !");
        }
      }
    );

  }

  /**
   * byOfMethodFromArray
   */
  byOfOperatorFromArray(): void {
    this.obsResponse = [];
    const array = [1, 2, 3, 4, 5, 6, 7];
    const obsof  = of(array);
    obsof.subscribe({
        next: (value: any) => {
          console.log("Observable  Value : " + value);
          this.obsResponse.push("observable Value : " + value);
        },
        error: (error: any) => {
          console.log("Observable  error : " + error);
          this.obsResponse.push("observable error : " + error);
        },
        complete: () => {
          console.log("Observable   Completed ! ");
          this.obsResponse.push("observable Completed !");
        }
      }
    );

  }


  /**
   * byOfMethodFromArray
   */
  byOfOperatorMultipleArray(): void {
    this.obsResponse = [];
    const array1 = [1, 2, 3, 4, 5, 6, 7];
    const array2 = [7, 2, 3, 4, 5, 6, 7];
    const obsof = of(array1, array2);
    obsof.subscribe({
        next: (value: any) => {
          console.log("Observable  Value : " + value);
          this.obsResponse.push("observable Value : " + value);
        },
        error: (error: any) => {
          console.log("Observable  error : " + error);
          this.obsResponse.push("observable error : " + error);
        },
        complete: () => {
          console.log("Observable   Completed ! ");
          this.obsResponse.push("observable Completed !");
        }
      }
    );

  }


  /**
   * byOfMethodFromArray
   */
  byOfOperatorFromNumbers(): void {
    this.obsResponse = [];
    const obsof = of(1, 2, 3, 4, 5, 6, 7);
    obsof.subscribe({
        next: (value: any) => {
          console.log("Observable  Value : " + value);
          this.obsResponse.push("observable Value : " + value);
        },
        error: (error: any) => {
          console.log("Observable  error : " + error);
          this.obsResponse.push("observable error : " + error);
        },
        complete: () => {
          console.log("Observable   Completed ! ");
          this.obsResponse.push("observable Completed !");
        }
      }
    );

  }

  /**
   * byOfMethodFromArray
   */
  byOfOperatorFromString(): void {
    this.obsResponse = [];
    const obsof = of('Hello', 'World');
    obsof.subscribe({
        next: (value: any) => {
          console.log("Observable  Value : " + value);
          this.obsResponse.push("observable Value : " + value);
        },
        error: (error: any) => {
          console.log("Observable  error : " + error);
          this.obsResponse.push("observable error : " + error);
        },
        complete: () => {
          console.log("Observable   Completed ! ");
          this.obsResponse.push("observable Completed !");
        }
      }
    );

  }



  /**
   * byOfOperatorDifferentTypes
   */
  byOfOperatorDifferentTypes(): void {
    this.obsResponse = [];
    const obsof = of(100, [1, 2, 3, 4, 5, 6, 7], "Hello World");
    obsof.subscribe(
      {
        next: (value: any) => {
          console.log("Observable  Value : " + value);
          this.obsResponse.push("observable Value : " + value);
        },
        error: (error: any) => {
          console.log("Observable  error : " + error);
          this.obsResponse.push("observable error : " + error);
        },
        complete: () => {
          console.log("Observable   Completed ! ");
          this.obsResponse.push("observable Completed !");
        }
      }
    );

  }

  /**
   * byOfMethodFromArray
   */
  byFromOperatorArray(): void {
    this.obsResponse = [];
    const array = [1, 2, 3, 4, 5, 6, 7];
    const obsof = from(array);
    obsof.subscribe(
      {
        next: (value: any) => {
          console.log("Observable  Value : " + value);
          this.obsResponse.push("observable Value : " + value);
        },
        error: (error: any) => {
          console.log("Observable  error : " + error);
          this.obsResponse.push("observable error : " + error);
        },
        complete: () => {
          console.log("Observable   Completed ! ");
          this.obsResponse.push("observable Completed !");
        }
      }
    );

  }

  /**
   * byFromOperatorString
   */
  byFromOperatorString(): void {
    this.obsResponse = [];
    const obsof = from('Hello World');
    obsof.subscribe(
      {
        next: (value: any) => {
          console.log("Observable  Value : " + value);
          this.obsResponse.push("observable Value : " + value);
        },
        error: (error: any) => {
          console.log("Observable  error : " + error);
          this.obsResponse.push("observable error : " + error);
        },
        complete: () => {
          console.log("Observable   Completed ! ");
          this.obsResponse.push("observable Completed !");
        }
      }
    );

  }

  /**
   * byFromOperatorString
   */
  byFromOperatorCollection(): void {
    this.obsResponse = [];
    let myMap = new Map();
    myMap.set(0, 'Hello');
    myMap.set(1, 'World');
    const obsof = from(myMap);
    obsof.subscribe(
      {
        next: (value: any) => {
          console.log("Observable  Value : " + value);
          this.obsResponse.push("observable Value : " + value);
        },
        error: (error: any) => {
          console.log("Observable  error : " + error);
          this.obsResponse.push("observable error : " + error);
        },
        complete: () => {
          console.log("Observable   Completed ! ");
          this.obsResponse.push("observable Completed !");
        }
      }
    );

  }

  /**
   * byFromOperatorPromise
   */
  byFromOperatorPromise(): void {
    this.obsResponse = [];
    const promiseSource = from(new Promise(resolve => resolve('Hello World!')));
    const obsof = from(promiseSource);
    obsof.subscribe(
      {
        next: (value: any) => {
          console.log("Observable  Value : " + value);
          this.obsResponse.push("observable Value : " + value);
        },
        error: (error: any) => {
          console.log("Observable  error : " + error);
          this.obsResponse.push("observable error : " + error);
        },
        complete: () => {
          console.log("Observable   Completed ! ");
          this.obsResponse.push("observable Completed !");
        }
      }
    );

  }


}
