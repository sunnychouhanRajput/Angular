import {Component, OnInit} from '@angular/core';
import { DataService} from "../../services/data-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  public cartTotal:number = 0;
  public favouriteTotal:number = 0;

  constructor(private dataServiceService:DataService) {}

  ngOnInit(){
    this.dataServiceService.getOrderCount().subscribe((orderCount)=>{
      this.cartTotal = orderCount.cartTotal;
      this.favouriteTotal = orderCount.favouriteTotal;
    });
  }
}
