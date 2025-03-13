import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'child-three',
  templateUrl: './child-three.component.html',
  styleUrl: './child-three.component.scss'
})
export class ChildThreeComponent implements OnInit, OnDestroy{
  private stop$ = new Subject<void>();
  private src = interval(2000);

  private id = new Date().toLocaleString();

  constructor() {}

  ngOnInit() {
    console.log("ChildThreeComponent Created " + this.id);

    this.src.pipe(takeUntil(this.stop$)).subscribe(value => {
      console.log("ChildThreeComponent Obs1 " + this.id);
    });

    this.src.pipe(takeUntil(this.stop$)).subscribe(value => {
      console.log("ChildThreeComponent Obs2  " + this.id);
    });
  }

  ngOnDestroy() {
    this.stop$.next();
    this.stop$.complete();
    console.log("ChildThreeComponent Destroyed " + this.id);
  }

}
