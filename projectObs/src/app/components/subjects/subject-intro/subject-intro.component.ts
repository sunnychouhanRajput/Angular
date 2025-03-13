import { Component } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Component({
  selector: 'app-subject-intro',
  templateUrl: './subject-intro.component.html',
  styleUrl: './subject-intro.component.scss'
})
export class SubjectIntroComponent {
  public obsResponse:string[]=[];
  public subjectListHeader:string='Subject Response';
  public subjectSyntax : string = `
      subject$ = new Subject();

      this.subject$.subscribe(val => {
        console.log(val);
      });

      this.subject$.next("1");
      this.subject$.next("2");
      this.subject$.error("error");
      this.subject$.complete();
  `;


  /**
   * exampleOne
   */
  exampleOne(){
    const observable$ = new Observable<number>(subscriber => {
      subscriber.next(Math.floor(Math.random() * 200) + 1);
    });
    const subject$:Subject<number> = new Subject();
    this.obsResponse = [];

    observable$.subscribe(val => {
      console.log("Obs1 :" + val);
      this.obsResponse.push("Obs1 :" + val);
    });

    observable$.subscribe(val => {
      console.log("Obs2 :" + val);
      this.obsResponse.push("Obs2 :" + val);
    });

    observable$.subscribe(val => {
      console.log("Obs3 :" + val);
      this.obsResponse.push("Obs3 :" + val);
    });

    subject$.subscribe(val => {
      console.log("Sub1 " + val);
      this.obsResponse.push("Sub1 :" + val);
    });

    subject$.subscribe(val => {
      console.log("Sub2 " + val);
      this.obsResponse.push("Sub2 :" + val);
    });

    subject$.subscribe(val => {
      console.log("Sub3 " + val);
      this.obsResponse.push("Sub3 :" + val);
    });

    subject$.next(Math.floor(Math.random() * 200) + 1);

  };

  /**
   * exampleTwo
   */
  exampleTwo(){
    this.obsResponse = [];
    const subjectTwo$:Subject<any> = new Subject();

    subjectTwo$.subscribe(val => {
      console.log("Sub1 " + val);
      this.obsResponse.push("Sub1 :" + val);
    });

    subjectTwo$.next(1);
    subjectTwo$.next(2);
    subjectTwo$.next(3);

    subjectTwo$.subscribe(val => {
      console.log("Sub2 " + val);
      this.obsResponse.push("Sub2 :" + val);
    });

    subjectTwo$.next(4);
    subjectTwo$.next(5);
    subjectTwo$.next(6);
  }

}
