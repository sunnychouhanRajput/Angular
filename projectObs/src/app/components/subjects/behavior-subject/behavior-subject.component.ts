import { Component } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrl: './behavior-subject.component.scss'
})
export class BehaviorSubjectComponent {
  public subjectListHeader:string = 'Subject Response';
  public obsResponse:string[]=[];
  public showDashboard:boolean =false;
  public behaviorSubjectSyntax:string  =`
    subject$ = new BehaviorSubject("0");
    this.subject$.next("1");
    this.subject$.next("2");
    this.subject$.subscribe(val => {
      console.log(val);
    });
  `;

  /**
   * exampleOne
   */
  exampleOne(){
    const subject$ = new BehaviorSubject("0");
    this.obsResponse = [];
    subject$.subscribe(val => {
      console.log("Sub1 " + val);
      this.obsResponse.push("Sub1 " + val);
    });

    subject$.next("1");
    subject$.next("2");
    subject$.next("3");
    subject$.subscribe(val => {
      console.log("sub2 " + val);
      this.obsResponse.push("Sub2 " + val);
    });

    subject$.next("4");
    subject$.next("5");
    subject$.complete();
  }

  /**
   * reset
   */
  reset(){
    this.obsResponse = [];
  }
}
