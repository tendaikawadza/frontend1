import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationGuard } from './guard/authentication.guard';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { NotificationModule } from './notification.module';
import { NotificationService } from './service/notification.service';
import { StockComponent } from './stock/stock/stock.component';
import { StockrequestComponent } from './stockrequest/stockrequest.component';

import { StockService } from './service/stock.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PurchaseRequastAdminComponent } from './purchase-requast-admin/purchase-requast-admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StockdashboardComponent } from './stockdashboard/stockdashboard.component';

import { CardModule, } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { StepsModule } from 'primeng/steps';

import { AuthenticationService } from './service/authentication.service';

import { SidebarModule } from 'primeng/sidebar';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ExportService } from './service/dist/export-service';
import { UserService } from './service/user.service';
import { UserComponent } from './user/user.component';
import { VerifyComponent } from './user/verify/verify.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StockComponent,

    StockrequestComponent,
    UserComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    StockdashboardComponent,
    PurchaseRequastAdminComponent,
    ProfileComponent,
    ResetpasswordComponent,
     VerifyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    MenuModule,
    CardModule,
    StepsModule,
    AppRoutingModule,

    ToastModule,
    RouterModule,
    HttpClientModule,
    NotificationModule,
    FormsModule,
        DialogModule,
    ButtonModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ToastModule,

    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    FormsModule,
    SidebarModule,





  ],
  exports: [TableModule],
  providers: [UserService, NotificationService, StockService, MessageService, AuthenticationGuard, AuthenticationService,ExportService,
    ConfirmationService, AuthenticatorResponse,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {



}








