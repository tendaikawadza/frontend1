import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-procurement-minutes-all',
  templateUrl: './procurement-minutes-all.component.html',
  styleUrls: ['./procurement-minutes-all.component.css']
})
export class ProcurementMinutesAllComponent implements OnInit,OnDestroy {
  qtSerach:any;
  receivedValue: string = '';
  subscription: any;
  constructor(private csService:CustomerService){
    this.subscription = this.csService.valueUpdate.subscribe((value: string) => {
      this.receivedValue = value;
    });
  }

ngOnInit(): void {
 this.qtSerach= this.csService.getVal();
}
ngOnDestroy() {
  this.subscription.unsubscribe();
}
}






