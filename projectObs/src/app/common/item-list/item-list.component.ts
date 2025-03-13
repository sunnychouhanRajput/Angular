import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {
  @Input() items: any[] = ['Apple', 'Banana', 'Orange'];
  @Input() listHeader:string="";
}
