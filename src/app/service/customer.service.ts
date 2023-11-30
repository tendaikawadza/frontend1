import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { CustomHttpResponse, CustomerState, Page, Profile } from '../interface/appstates';

import { Key } from '../enum/key.enum';
import { Stats } from '../interface/stats';
import { Customer } from '../interface/customer';
import { Invoice } from '../interface/invoice';
import { Subject } from 'rxjs';
import { Issue } from '../interface/issue';
import { User } from '../model/user';
@Injectable()

export class CustomerService {
    
  private valueSource = new Subject<string>();
  valueUpdate = this.valueSource.asObservable()
    server: string = 'http://localhost:8080';
    qtSerach: any;
    constructor(private http: HttpClient) { }

    public addPurchahse(product: any): Observable<any> {
        let url = `${this.server}/purchaserequest/upload`;
        return this.http.post<any>(url, product);
    }

    setValue(value: any) {
        this.qtSerach = value;
    }
    getVal() {
        return this.qtSerach;
    }

    customers$ = (page: number = 0) => <Observable<CustomHttpResponse<Page<Customer> & User & Stats>>>
        this.http.get<CustomHttpResponse<Page<Customer> & User & Stats>>
            (`${this.server}/customer/list?page=${page}`)
            .pipe(
                tap(console.log),
                catchError(this.handleError)
            );

    customer$ = (customerId: number) => <Observable<CustomHttpResponse<CustomerState>>>
        this.http.get<CustomHttpResponse<CustomerState>>
            (`${this.server}/customer/get/${customerId}`)
            .pipe(
                tap(console.log),
                catchError(this.handleError)
            );

    update$ = (customer: Customer) => <Observable<CustomHttpResponse<CustomerState>>>
        this.http.put<CustomHttpResponse<CustomerState>>
            (`${this.server}/customer/update`, customer)
            .pipe(
                tap(console.log),
                catchError(this.handleError)
            );

    searchCustomers$ = (name: string = '', page: number = 0) => <Observable<CustomHttpResponse<Page<Customer> & User>>>
        this.http.get<CustomHttpResponse<Page<Customer> & User>>
            (`${this.server}/customer/search?name=${name}&page=${page}`)
            .pipe(
                tap(console.log),
                catchError(this.handleError)
            );

    newCustomers$ = (customer: Customer) => <Observable<CustomHttpResponse<Customer & User>>>
        this.http.post<CustomHttpResponse<Customer & User>>
            (`${this.server}/customer/create`, customer)
            .pipe(
                tap(console.log),
                catchError(this.handleError)
            );

    newInvoice$ = () => <Observable<CustomHttpResponse<Customer[] & User>>>
        this.http.get<CustomHttpResponse<Customer[] & User>>
            (`${this.server}/purchaserequests/insert`)
            .pipe(
                tap(console.log),
                catchError(this.handleError)
            );

    createInvoice$ = (customerId: number, invoice: Invoice) => <Observable<CustomHttpResponse<Customer[] & User>>>
        this.http.post<CustomHttpResponse<Customer[] & User>>
            (`${this.server}/customer/invoice/addtocustomer/${customerId}`, invoice)
            .pipe(
                tap(console.log),
                catchError(this.handleError)
            );

    invoices$ = (page: number = 0) => <Observable<CustomHttpResponse<Page<Invoice> & User>>>
        this.http.get<CustomHttpResponse<Page<Invoice> & User>>
            (`${this.server}/purchase/list`)
            .pipe(
                tap(console.log),
                catchError(this.handleError)
            );

    invoice$ = (invoiceId: number) => <Observable<CustomHttpResponse<Customer & Invoice & User>>>
        this.http.get<CustomHttpResponse<Customer & Invoice & User>>
            (`${this.server}/customer/invoice/get/${invoiceId}`)
            .pipe(
                tap(console.log),
                catchError(this.handleError)
            );

    downloadReport$ = () => <Observable<HttpEvent<Blob>>>
        this.http.get(`${this.server}/customer/download/report`,
            { reportProgress: true, observe: 'events', responseType: 'blob' })
            .pipe(
                tap(console.log),
                catchError(this.handleError)
            );

    private handleError(error: HttpErrorResponse): Observable<never> {
        console.log(error);
        let errorMessage: string;
        if (error.error instanceof ErrorEvent) {
            errorMessage = `A client error occurred - ${error.error.message}`;
        } else {
            if (error.error.reason) {
                errorMessage = error.error.reason;
                console.log(errorMessage);
            } else {
                errorMessage = `An error occurred - Error status ${error.status}`;
            }
        }
        return throwError(() => errorMessage);
    }

    
    // createIssue$ = (issueId: number) => <Observable<CustomHttpResponse<issue >>>
    //     this.http.post<CustomHttpResponse<issue>>
    //         (`${this.server}/issue/create/${issueId}`)
    //         .pipe(
    //             tap(console.log),
    //             catchError(this.handleError)
    //         );


// Method to collect issues
AllIssue$ = (): Observable<any> => {
    // Make an HTTP GET request to the `${this.server}/issues/all` endpoint
    return this.http.get<CustomHttpResponse<any>>(`${this.server}/issues/all`)
      .pipe(
        // Log the emitted values to the console for debugging
        tap(console.log),
        
        // Catch any errors that occur during the observable stream
        catchError(this.handleError)
      );
  };



  
  // Method to get a single issue
  getIssue$ = (issueId: number = 1): Observable<CustomHttpResponse<Issue>> => {
    // Make an HTTP POST request to the `${this.server}/issue/get/${issueId}` endpoint
    return this.http.get<CustomHttpResponse<Issue>>(`${this.server}/issue/get/${issueId}`)
      .pipe(
        // Log the emitted values to the console for debugging
        tap(console.log),
        
        // Catch any errors that occur during the observable stream
        catchError(this.handleError)
      );
  };
    // //method to view the issue details
    // issueDetails$=(issueId:number) => Observable<CustomHttpResponse<Issue & User>>{
    //     // Make an HTTP POST request to the `${this.server}/issue/get/${issueId}` endpoint
    // return this.http.get<CustomHttpResponse<Issue & User>>(`${this.server}/issue/get/${issueId}`)
    // .pipe(
    //   // Log the emitted values to the console for debugging
    //   tap(console.log),
      
    //   // Catch any errors that occur during the observable stream
    //   catchError(this.handleError)


    // }

  







  updateValue(value: string) {
    this.valueSource.next(value);
  }
}







