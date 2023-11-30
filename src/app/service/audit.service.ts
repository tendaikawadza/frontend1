import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuditService {
  constructor(private http: HttpClient) {}
  server: any;
  public host = environment.apiUrl;
  handleError(handleError: any): any {
    throw new Error('Method not implemented.');
  }





  downloadReport$ = () => <Observable<HttpEvent<Blob>>>
        this.http.get(`${this.host}/stock/download/report`,
        {observe: 'response', responseType: 'blob'})
            .pipe(
                tap(console.log),
                catchError(this.handleError)
            );



}
