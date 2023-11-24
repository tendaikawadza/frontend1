import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import { BehaviorSubject, Observable, catchError, map, of, startWith } from 'rxjs';
import { DataState } from 'src/app/enum/datastate.enum';
import { AuditService } from 'src/app/service/audit.service';
import { saveAs } from 'file-saver';



@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {
 

  private fileStatusSubject = new BehaviorSubject<{ status: string, type: string, percent: number }>({
    status: 'defaultStatus',
    type: 'defaultType',
    percent: 0
  });
  

  
  fileStatus$ = this.fileStatusSubject.asObservable();
  dataSubject: any;
  test: any;
  constructor(private router: Router, private auditService: AuditService) { }
 
 
  

  
 
  ngOnInit(): void {
    this.report();
    //throw new Error('Method not implemented.');
  }
  report(): void {
    this.test = this.auditService.downloadReport$().pipe(
        map((response: HttpEvent<string[] | Blob>) => {
          console.log(response);
         // this.reportProgress(response);
          return { dataState: DataState.LOADED, appData: this.dataSubject.value };
        }),
        // startWith({ dataState: DataState.LOADED, appData: this.dataSubject.value }),
        // catchError((error: string) => {
        //   return of({ dataState: DataState.LOADED, error, appData: this.dataSubject.value })
        // })
      )
      console.log(this.test);
  }
  
  private reportProgress(httpEvent: HttpEvent<string[] | Blob>): void {
    switch (httpEvent.type) {
      case HttpEventType.DownloadProgress:
      case HttpEventType.UploadProgress:
        if (httpEvent.total !== undefined) {
          const percent = Math.round(100 * httpEvent.loaded / httpEvent.total);
          this.fileStatusSubject.next({ status: 'progress', type: 'Downloading...', percent });
        }
        break;
      case HttpEventType.ResponseHeader:
        console.log('Got response Headers', httpEvent);
        break;
      case HttpEventType.Response:
        const fileName = httpEvent.headers.get('File-Name') || 'default-file-name';
        saveAs(new File([<Blob>httpEvent.body], fileName, { type: `${httpEvent.headers.get('Content-Type')};charset-utf-8` }));
        this.fileStatusSubject.next({ status: '', type: '', percent: 0 });
        break;
      default:
        console.log(httpEvent);
        break;
    }
  }

}




