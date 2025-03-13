import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, takeUntil} from "rxjs";
import {BaseComponent} from "../../../common/base/base.component";

@Component({
  selector: 'child-four',
  templateUrl: './child-four.component.html',
  styleUrl: './child-four.component.scss'
})
export class ChildFourComponent extends BaseComponent implements OnInit,OnDestroy {
  private src = interval(2000);

  private id = new Date().toLocaleString();

  constructor() {
    super();
  }

  ngOnInit() {
    console.log("ChildFourComponent Created " + this.id);

    this.src.pipe(takeUntil(this.stop$)).subscribe(value => {
      console.log("ChildFourComponent Obs1 " + this.id);
    });

    this.src.pipe(takeUntil(this.stop$)).subscribe(value => {
      console.log("ChildFourComponent Obs2  " + this.id);
    });
  }

  override ngOnDestroy() {
    super.ngOnDestroy();
    console.log("ChildFourComponent Component Destroyed " + this.id);
  }
}
