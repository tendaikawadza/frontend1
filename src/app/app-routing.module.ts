import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationGuard } from './guard/authentication.guard';
import { StockComponent } from './stock/stock/stock.component';
import { StockdashboardComponent } from './stockdashboard/stockdashboard.component';

import { AuditComponent } from './audit/audit/audit.component';
import { HeadProcurementAuthorisationComponent } from './component/head-procurement-authorisation/head-procurement-authorisation.component';
import { MinutesComponent } from './component/minutes/minutes.component';
import { NewHeadProcurementAuthorisationComponent } from './component/new-head-procurement-authorisation/new-head-procurement-authorisation.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { StockrequestComponent } from './stockrequest/stockrequest.component';
import { UserComponent } from './user/user.component';
import { VerifyComponent } from './user/verify/verify.component';


const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'resetpassword', component: ResetpasswordComponent,canActivate: [AuthenticationGuard] },
  { path: 'user/verify/account/:key', component: VerifyComponent,canActivate: [AuthenticationGuard] },
  { path: 'user/verify/password/:key', component: VerifyComponent,canActivate: [AuthenticationGuard] },
  { path: 'profile/:uid', component: ProfileComponent, canActivate: [AuthenticationGuard] },
  { path: 'register', component: RegisterComponent },
  //{ path: 'purchase', component: PurchaseRequastAdminComponent },
  {path: 'stockrequest' ,component:StockrequestComponent, canActivate: [AuthenticationGuard]},
  { path: 'stock', component: StockComponent, canActivate: [AuthenticationGuard]},
  { path: 'user/management', component: UserComponent, canActivate: [AuthenticationGuard]},
  { path: 'Dashboard', component:StockdashboardComponent,canActivate: [AuthenticationGuard]},
  { path: 'HeadProcurementAuthorisation', component:HeadProcurementAuthorisationComponent,canActivate: [AuthenticationGuard]},
  { path: 'minutes', component:MinutesComponent,canActivate: [AuthenticationGuard]},
  {
    path: 'audit',
     component:AuditComponent,

  // canActivate: [AuthenticationGuard]
},

  { path: 'HeadProcurementAuthorisation/new', component:NewHeadProcurementAuthorisationComponent,canActivate: [AuthenticationGuard]},
  { path: 'procurement',
  loadChildren: () => import('./procurement/procurement-module').then(m => m.ProcurementModule)
},
  {
    path: 'purchase',
    loadChildren: () => import('./purchase/purchase.module').then(m => m.PurchaseModule)
  },
  {
    path: 'employees',
    loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule)
  },
  {
    path: 'issued',
    loadChildren: () => import('./issued/issued.module').then(m => m.issuedModule)
  },
  {path: 'stock/:id', component:StockComponent, pathMatch: 'full'},
  { path: '', redirectTo: '/login', pathMatch: 'full' }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
