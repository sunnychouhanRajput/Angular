import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'child-one',
  templateUrl: './child-one.component.html',
  styleUrl: './child-one.component.scss'
})
export class ChildOneComponent implements OnInit ,OnDestroy{
  private src = interval(2000);
  private id = new Date().toLocaleString();
  private obs!: Subscription ;
  constructor() {}

  ngOnInit() {
    console.log("ChildOneComponent Created " + this.id);

    this.obs = this.src.subscribe(value => {
      console.log("ChildOneComponent Received " + this.id);
    });
  }

  ngOnDestroy() {
    console.log(" ChildOneComponent Component Destroyed " + this.id);
    this.obs.unsubscribe();
  }
}
