import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data-service.service";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  public cartTotal:number = 0;
  public favouriteTotal:number = 0;
  constructor(private dataServiceService:DataService) {}

  ngOnInit(){
    this.dataServiceService.getOrderCount().subscribe((orderCount)=>{
      this.cartTotal = orderCount.cartTotal;
      this.favouriteTotal = orderCount.favouriteTotal;
    })
  }
}
