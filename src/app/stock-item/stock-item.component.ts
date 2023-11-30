import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { StockService } from '../service/stock.service';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
  regform: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder,
    private stockService: StockService) { }

  ngOnInit(): void {
    this.regform = this.formBuilder.group(
      {
        requestingDepartment: ['', Validators.required],
        productCode: [null, [Validators.required],],
        departmentCode: ['', [Validators.required]],
        purposeOfIssue: ['', [Validators.required]],
        itemDescription: ['', Validators.required],
        dateOfPreviousIssue: ['', Validators.required],
        previusIssueQuanity: [null, Validators.required],
        estimatedValue: [null, Validators.required],
        signatureImageUrl: ['', Validators.required],
        quantity: [null, Validators.required],
      }
    );

    this.stockService.getStock().subscribe(()=>{
      next: {}
      error: {}
    });
  }


  get f(): { [key: string]: AbstractControl } {
    return this.regform.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.regform.invalid) {
      return;
    }
    console.log(JSON.stringify(this.regform.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.regform.reset();
  }

}
