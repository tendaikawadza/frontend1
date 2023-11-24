import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcurementComponent } from './procurement.component';


const routes: Routes = [{path:'', component:ProcurementComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcurementRoutingModule { }
