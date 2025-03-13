import {Component, ElementRef, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {from, Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'map-operator',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {
  public obsResponse: string[] = [];
  public mapListHeader:string = 'Map Operator Response';
  public mapSyntax:string = `
    srcArray = from([1, 2, 3, 4]);
    multiplyBy2() {
      this.srcArray
      .pipe(map(val => { return val * 2}))
      .subscribe(val => { console.log(val)})
    }
  `;
  constructor(private http: HttpClient) {}

  @ViewChild('btn', { static: true }) button!: ElementRef;

  $dogsBreed(): Observable<any> {
    return this.http.get<any>("https://dog.ceo/api/breeds/list/all")
  }

  /**
   * mapToSingleProperty
   */
  mapToSingleProperty() {
    this.obsResponse = [];
    const srcObject = from([
      { fName: 'Sachin', lName: "Tendulkar" },
      { fName: 'Rahul', lName: "Dravid" },
      { fName: 'Saurav', lName: "Ganguly" },
    ]);
    srcObject.pipe(
        map(data => {
          return data.fName + ' ' + data.lName
        })
      ).subscribe(
      (value: any) => {
          this.obsResponse.push(value);
          console.log(value)
        }
      );
  }

  /**
   * getDogsBreed
   */
  getDogsBreed() {
    this.obsResponse = [];
    this.$dogsBreed()
      .pipe(map(data => {
        console.log('res :' ,data);
        return this.transformData(data?.message);
      }))
      .subscribe((data: any) => {
        console.log("Observable  response : " + data);
        this.obsResponse = [...data];
      }
      );

  }

  /**
   * transformData
   * @param data
   */
  transformData(data:any){
    const resArray:string[] = [];
    Object.entries(data).forEach(([key, value]) => {
      if((value as []).length >0 ){
        let dataStr:string = `${key}: ${value}`;
        resArray.push(dataStr);
      }
    });
    return resArray;
  }
}
