import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-procurement-minutes',
  templateUrl: './procurement-minutes.component.html',
  styleUrls: ['./procurement-minutes.component.css']
})
export class ProcurementMinutesComponent implements OnInit {
  constructor(private csService:CustomerService){}
i: any;
quatationSearchValue: any;
inputValue: string = '';
//formGroup: FormGroup<any>;
qtSearch:any;
ngOnInit(): void {
  throw new Error('Method not implemented.');
}
addRow() {
throw new Error('Method not implemented.');
}
removeRow(index: number) {
  this.removeRow(index);



};

  
sendValue() {
  this.csService.updateValue(this.inputValue);
}




}

  
  


