import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'child-two',
  templateUrl: './child-two.component.html',
  styleUrl: './child-two.component.scss'
})
export class ChildTwoComponent implements OnInit , OnDestroy {
  private src1 = interval(1000);
  private src2 = interval(1500);
  private src3 = interval(2000);

  private id = new Date().toLocaleString();
  private subscriptions: Subscription[] = [];


  constructor() {}

  ngOnInit() {
    console.log("ChildTwoComponent Created " + this.id);

    this.subscriptions.push( this.src1.subscribe(value => {
      console.log("ChildTwoComponent Src1 " + this.id);
    }));

    this.subscriptions.push( this.src2.subscribe(value => {
      console.log("ChildTwoComponent Src2 " + this.id);
    }));

    this.subscriptions.push(this.src3.subscribe(value => {
      console.log("ChildTwoComponent Src3 " + this.id);
    }));
  }

  ngOnDestroy() {

   this.subscriptions.forEach((subscription)=>{
     subscription.unsubscribe();
   });
    console.log("ChildTwoComponent Destroyed " + this.id);
  }
}
