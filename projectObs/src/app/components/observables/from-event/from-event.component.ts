import {Component,AfterViewInit , OnDestroy, ElementRef, ViewChild} from '@angular/core';
import {fromEvent, debounceTime, Subscription} from "rxjs";
import {  map } from 'rxjs/operators';
@Component({
  selector: 'from-event',
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.scss'
})
export class FromEventComponent implements AfterViewInit , OnDestroy {
  @ViewChild('btn', { static: true }) button!: ElementRef;
  @ViewChild('name', { static: true }) name!: ElementRef;

  public fromEventSyntax:string = `
      fromEvent<T>(
             target: FromEventTarget<T>,
             eventName: string,
             options: EventListenerOptions,
             resultSelector: (...args: any[]) => T
      ): Observable<T>
  `;

  private buttonSubscription! :Subscription;
  private scrollSubscription! :Subscription;
  private nameSubscription! :Subscription;
  public searchTerm:string = '';



  ngAfterViewInit() {
    this.buttonClick();
    this.scroll();
    this.inputEvent();
  }

  buttonClick() {
    this.buttonSubscription =  fromEvent(this.button.nativeElement, 'click')
      .pipe(
        debounceTime(3000)
      )
      .subscribe(res => console.log("button Clicked: " , res));
  }

  scroll() {
    // Subscribe to the window's scroll event
    this.scrollSubscription = fromEvent(window, 'scroll').subscribe((event: Event) => {
      // Example: Check scroll position
      const scrollPosition = window.scrollY;  // Distance from the top of the page
      console.log('Scroll position:', scrollPosition);

      // You can also do other actions based on scroll position, e.g., infinite scrolling
      if (scrollPosition > 200) {
        console.log('You have scrolled more than 200px!');
      }
    });
  }

  inputEvent(){
    // Listen to keyup event with debounce
    this.nameSubscription = fromEvent(this.name.nativeElement, 'keyup')
      .pipe(
        debounceTime(3000),  // Wait for 300ms after the last keyup before emitting
        map((event: any) => (event.target as HTMLInputElement).value)  // Extract the input value
      )
      .subscribe(value => {
        this.searchTerm = value;  // Update the search term with the input value
      });
  }

  ngOnDestroy() {
    this.buttonSubscription.unsubscribe();
    this.scrollSubscription.unsubscribe();
    this.nameSubscription.unsubscribe();
  }
}
