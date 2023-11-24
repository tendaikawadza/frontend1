import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssuedComponent } from './issued.component';


const routes: Routes = [{path:'', component:IssuedComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class issuedRoutingModule { }