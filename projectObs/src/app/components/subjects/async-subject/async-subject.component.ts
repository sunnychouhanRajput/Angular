import { Component } from '@angular/core';
import {AsyncSubject, ReplaySubject} from "rxjs";

@Component({
  selector: 'async-subject',
  templateUrl: './async-subject.component.html',
  styleUrl: './async-subject.component.scss'
})
export class AsyncSubjectComponent {
  public subjectListHeader:string = 'Subject Response';
  public obsResponse:string[]=[];
  public asyncSubjectSyntax:string  =`
    subject$ = new AsyncSubject("0");
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
    const subject$ = new AsyncSubject();
    this.obsResponse = [];
    subject$.next("1");
    subject$.next("2");

    subject$.subscribe(
      val => {
        console.log("Sub1 " + val) ;
        this.obsResponse.push("Sub1 " + val);
      },
      err => {
        console.error("Sub1 " + err) ;
        this.obsResponse.push("Sub1 " + err);
      },
      () =>{
        console.log("Sub1 Complete")
        this.obsResponse.push("Sub1 Complete");
      }
    );

    subject$.next("3");
    subject$.next("4");

    subject$.subscribe(val => {
        console.log("sub2 " + val);
        this.obsResponse.push("Sub2 " + val);
      },
      err => {
        console.error("Sub2 " + err);
        this.obsResponse.push("Sub2 " + err);
      },
      () => {
        console.log("Complete");
        this.obsResponse.push("Sub2  Complete");
      }
    );

    subject$.next("5");

    subject$.complete();

    subject$.error("err");
    subject$.next("6");

    subject$.subscribe(
      val => {
        console.log("sub3 " + val);
        this.obsResponse.push("Sub3 " + val);
      },
      err => {
        console.error("sub3 " + err);
        this.obsResponse.push("Sub3 " + err);
      },
      () => {
        console.log("Complete");
        this.obsResponse.push("sub3  Complete");
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
