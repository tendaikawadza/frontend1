import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-issued-add',
  templateUrl: './issued-add.component.html',
  styleUrls: ['./issued-add.component.css']
})
export class IssuedAddComponent implements OnInit {
  constructor(private customerService: CustomerService){}
fb: any;
ngOnInit(): void {
this.customerService.AllIssue$().subscribe(
  (results:any)=>{
    console.log(results);
  }

);
}
addIssue() {
throw new Error('Method not implemented.');
}

clearSignature() {
throw new Error('Method not implemented.');
}

myForm: FormGroup<any>;


addRow() {
  const newRow = this.fb.group({
    // Define form controls for the row here

    issueDate:[''],
    issueTo: [''],
    orderNumber:[''],
    dispatch:[''],
    itemDescription: [''],
    quantity: [''],
    unitPrice: [''], 
    
    estimatedValue: [''],
  });
  this.gridRows.push(newRow);
  console.log('new')
}

  // Remove a row from the grid
  removeRow(index: number) {
    this.gridRows.removeAt(index);
  }

  // Get the form array for grid rows
  get gridRows(): FormArray {
    return this.myForm.get('gridRows') as FormArray;
  }


// private Date issuedate;
// private String  issueTo;
// private int orderNumber;
//  private String dispatch;
//  private String preparedBY;
// private String itemDescription;
// private int quantity;
// private int unitPrice;
// private int estimatedValue;
// private String emailAddress;

}
