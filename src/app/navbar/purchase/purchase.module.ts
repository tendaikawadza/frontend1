import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaserequestComponent } from './purchaserequest/purchaserequest.component';
import { PurchaserequestDetailsComponent } from './purchaserequest-details/purchaserequest-details.component';
import { PurchaserequestAddComponent } from './purchaserequest-add/purchaserequest-add.component';
import { PurchaseComponent } from './purchase.component';
import {TabViewModule} from 'primeng/tabview';
import { CustomerService } from '../service/customer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignaturePadModule } from 'angular2-signaturepad';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    
    PurchaserequestComponent,
    PurchaserequestDetailsComponent,
    PurchaserequestAddComponent,
    PurchaseComponent
  ],
  imports: [
    CommonModule,
    TabViewModule,
    PurchaseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SignaturePadModule,
    TableModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressBarModule,
    InputNumberModule,
    InputTextModule,
    InputTextareaModule

    
  ],
  providers: [CustomerService ],
})
export class PurchaseModule { }
