import {Component, OnDestroy} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export class BaseComponent implements OnDestroy {
  public stop$:Subject<void> = new Subject<void>();

  ngOnDestroy() {
    this.stop$.next();
    this.stop$.complete();
    console.log("BaseComponent Destroyed ");
  }
}
