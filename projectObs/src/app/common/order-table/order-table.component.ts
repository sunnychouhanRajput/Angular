import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data-service.service";

@Component({
  selector: 'order-table',
  templateUrl: './order-table.component.html',
  styleUrl: './order-table.component.scss'
})
export class OrderTableComponent implements OnInit{
  public itemList = [
    {name:"Item 1", action:{inCart:false , isFavourite:false} },
    {name:"Item 2", action:{inCart:false , isFavourite:false} },
    {name:"Item 3", action:{inCart:false , isFavourite:false} },
  ];

  public cartTotal:number = 0;
  public favouriteTotal:number = 0;

  constructor(private dataService:DataService) {}

  ngOnInit() {
    this.dataService.getOrderCount().subscribe((orderCount)=>{
      this.cartTotal = orderCount.cartTotal;
      this.favouriteTotal = orderCount.favouriteTotal;
    });
  }

  /**
   * addToCart
   * @param item
   */
  addToCart(item:any){
    item.inCart = true;
    let count =   {
      cartTotal : this.cartTotal+1,
      favouriteTotal : this.favouriteTotal
    };
    this.dataService.setOrderCount(count);
  }

  /**
   * addToWishList
   * @param item
   */
  addToWishList(item:any){
    item.isFavourite = true;
    let count =   {
      cartTotal : this.cartTotal,
      favouriteTotal : this.favouriteTotal+1
    };
    this.dataService.setOrderCount(count);
  }
}
