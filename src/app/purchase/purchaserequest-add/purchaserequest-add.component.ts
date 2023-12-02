import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataState } from 'src/app/enum/datastate.enum';
import { CustomHttpResponse } from 'src/app/interface/appstates';
import { Customer } from 'src/app/interface/customer';
import { State } from 'src/app/interface/state';
import { User } from 'src/app/interface/user';
import { CustomerService } from 'src/app/service/customer.service';
import { NotificationService } from 'src/app/service/notification.service';


@Component({
  selector: 'app-purchaserequest-add',
  templateUrl: './purchaserequest-add.component.html',
  styleUrls: ['./purchaserequest-add.component.css'],
})
export class PurchaserequestAddComponent implements OnInit {
  newInvoiceState$: Observable<State<CustomHttpResponse<Customer[] & User>>>;
  private dataSubject = new BehaviorSubject<any>(null);
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();
  readonly DataState = DataState;
  newInvoicefrm:FormGroup;
  signatureImg: string;
  // @ViewChild(SignaturePad) signaturePad: SignaturePad;
  myForm: FormGroup;
  signaturePadOptions: Object = {
    'minWidth': 2,
    'canvasWidth': 700,
    'canvasHeight': 300
  };
  files:any;
  userId:any=localStorage.getItem('user');
  constructor(private customerService: CustomerService,
    private notification: NotificationService, public fb: FormBuilder) {
      this.myForm = this.fb.group({
        gridRows: this.fb.array([]),
        requestingDepartment:['', Validators.required],
        departmentCode:['', Validators.required],
        receiverEmail:['', Validators.required],
        profileImage:['', Validators.required],
      });
     }

  ngOnInit() {

    // this.addForm.get("items").valueChanges.subscribe( val => {
    //   if (val === true) {
    //     this.addForm.get("items_value").setValue("yes");
    //     this.addForm.addControl('rows', this.rows);
    //   }
    //   if (val === false) {
    //     this.addForm.get("items_value").setValue("no");
    //     this.addForm.removeControl('rows');
    //   }
    // });

    // this.newInvoiceState$ = this.customerService.newInvoice$()
    //   .pipe(
    //     map(response => {
    //    //   this.notification.onDefault(response.message);
    //       console.log(response);
    //       this.dataSubject.next(response);
    //       return { dataState: DataState.LOADED, appData: response };
    //     }),
    //     // startWith({ dataState: DataState.LOADING }),
    //     catchError((error: string) => {
    //    //   this.notification.onError(error);
    //       return of({ dataState: DataState.ERROR, error })
    //     })
    //   )

  }

   // Get the form array for grid rows
   get gridRows(): FormArray {
    return this.myForm.get('gridRows') as FormArray;
  }

  // Add a new row to the grid
  addRow() {
    const newRow = this.fb.group({
      // Define form controls for the row here

      initiatedby:[''],
      itemNumber: [''],
      itemDescription: [''],
      unitPrice: [''],
      quantity: [''],
      reason: [''],
      estimatedValue: [''],
    });
    this.gridRows.push(newRow);
    console.log('new')
  }

  // Remove a row from the grid
  removeRow(index: number) {
    this.gridRows.removeAt(index);
  }

  createItemFormGroup(): FormGroup {
    return this.fb.group({
      name: null,
      description: null,
      qty: null
    });
  }
  ngAfterViewInit() {
    // this.signaturePad is now available
    // this.signaturePad.set('minWidth', 2);
    // this.signaturePad.clear();
  }
save(){
  console.log('test')
  console.log(this.gridRows)
}
  drawComplete() {
  //  console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    console.log('begin drawing');
  }

  clearSignature() {
    // this.signaturePad.clear();
  }

  savePad() {

  }
  onFileSelected(event: Event): void {
    const inputElement:any = event.target as HTMLInputElement;
    if (inputElement.files.length > 0) {
      const file = inputElement.files[0];

      const reader = new FileReader();

      reader.onload = (e: any) => {
        const uint8Array = new Uint8Array(e.target.result);
        console.log('Uint8Array:', uint8Array);

        const byteArray = this.uint8ArrayToByteArray(uint8Array);
        console.log(byteArray);
        this.files=byteArray;
      };

      reader.readAsArrayBuffer(file);
    }
  }
  uint8ArrayToByteArray(uint8Array: Uint8Array): number[] {
    const byteArray: number[] = [];

    for (let i = 0; i < uint8Array.length; i++) {
      byteArray.push(uint8Array[i]);
    }

    return byteArray;
  }






  newInvoice(): void {
    const obj={}
    const tmparr:any=[]
    this.dataSubject.next({ ...this.dataSubject.value, message: null });
    this.isLoadingSubject.next(true);
   // console.log(this.signatureImg);
   // console.log(this.myForm.value)
    const resobj=this.myForm.value;
    console.log(resobj)
    const list=resobj?.gridRows;
    // Convert the data URL to a Blob
  //  const signatureData = this.signaturePad.toDataURL(); // Get the base64 data of the signature
//console.log(signatureData);

//  const byteCharacters = atob(resobj?.profileImage.split(',')[1]);
//     const byteNumbers = new Array(byteCharacters.length);
//     for (let i = 0; i < byteCharacters.length; i++) {
//       byteNumbers[i] = byteCharacters.charCodeAt(i);
//     }
//     const byteArray = new Uint8Array(byteNumbers);
//     console.log(byteArray);



    // list.forEach((a:any)=>{

    //   a['requestingDepartment']=resobj['requestingDepartment'];
    //   a['departmentCode']=resobj['departmentCode'];
    //   a['requestReason']=resobj['departmentCode'];
    //   a['receiverEmail']=resobj['receiverEmail'];
    //   a['emailAddress']=resobj['receiverEmail'];
    //   a['date']=new Date();
    //   a['purchaseDate']=new Date();
    //   a['signature']=[blob];
    //   a['profileImage']=[blob];
    //   a['file']=[blob];
    //   a['name']=null;
    //   a['type']=null;
    //   a['userId']=7;
    //   tmparr.push(a);

    //   })

    let newarr={

         purchaseDate:"09/05/2023",
       requestingDepartment:"test",
       departmentCode:44,
       requestReason:"tetss",
       itemNumber:88,
       itemDescription:"sdfsfsf",
       unitPrice:56,
       quantity:55,
       estimatedValue:35,
       emailAddress:"sdsfs",
       name:"",
       type:"",
       profileImage:this.files
  }

      console.log(newarr);
    this.customerService.addPurchahse(newarr).subscribe(data=>{
console.log('data')
    });
    // this.newInvoiceState$ = this.customerService.createInvoice$(newInvoiceForm.value.customerId, newInvoiceForm.value)
    //   .pipe(
    //     map(response => {
    //      // this.notification.onDefault(response.message);
    //       console.log(response);
    //       newInvoiceForm.reset({ status: 'PENDING' });
    //       this.isLoadingSubject.next(false);
    //       this.dataSubject.next(response);
    //       return { dataState: DataState.LOADED, appData: this.dataSubject.value };
    //     }),
    //     startWith({ dataState: DataState.LOADED, appData: this.dataSubject.value }),
    //     catchError((error: string) => {
    //     //  this.notification.onError(error);
    //       this.isLoadingSubject.next(false);
    //       return of({ dataState: DataState.LOADED, error })
    //     })
    //   )
  }

}
