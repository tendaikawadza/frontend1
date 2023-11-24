import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuditService {
  constructor(private http: HttpClient) {}
  server: any;
  handleError(handleError: any): any {
    throw new Error('Method not implemented.');
  }





  downloadReport$ = () => <Observable<HttpEvent<Blob>>>
        this.http.get(`${this.server}/stock/download/report`,
            { reportProgress: true, observe: 'events', responseType: 'blob' })
            .pipe(
                tap(console.log),
                catchError(this.handleError)
            );



}
