import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { saveAs } from 'file-saver';
import { BehaviorSubject, map } from 'rxjs';
import { AuditService } from 'src/app/service/audit.service';
import { ExportService } from 'src/app/service/dist/export-service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css'],
})
export class AuditComponent implements OnInit {
  data: any[][];
  headers: string[];
  dataLoaded = false;
  private fileStatusSubject = new BehaviorSubject<{
    status: string;
    type: string;
    percent: number;
  }>({
    status: 'defaultStatus',
    type: 'defaultType',
    percent: 0,
  });

  fileStatus$ = this.fileStatusSubject.asObservable();
  dataSubject: any;
  test: any;
  constructor(
    private router: Router,
    private auditService: AuditService,
    private exportService: ExportService
  ) {}

  ngOnInit(): void {
    this.fetchExcelFromApi();
    //throw new Error('Method not implemented.');
  }

  fetchExcelFromApi() {
    this.auditService.downloadReport$().pipe(
      map((response) => {
        console.log(response);
      })
    );

    // {
    //   const reader = new FileReader();
    //   reader.onload = (e: any) => {
    //     const data = new Uint8Array(e.target.result);
    //     const workbook = XLSX.read(data, { type: 'array' });
    //     const sheetName = workbook.SheetNames[0]; // Assuming it's the first sheet

    //     const worksheet = workbook.Sheets[sheetName];
    //     this.data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    //     this.headers = this.data[0];
    //     this.data = this.data.slice(1); // Removing header row
    //     this.dataLoaded = true;
    //   };

    //   reader.readAsArrayBuffer(fileBlob);
    // });
  }

  private reportProgress(httpEvent: HttpEvent<string[] | Blob>): void {
    switch (httpEvent.type) {
      case HttpEventType.DownloadProgress:
      case HttpEventType.UploadProgress:
        if (httpEvent.total !== undefined) {
          const percent = Math.round(
            (100 * httpEvent.loaded) / httpEvent.total
          );
          this.fileStatusSubject.next({
            status: 'progress',
            type: 'Downloading...',
            percent,
          });
        }
        break;
      case HttpEventType.ResponseHeader:
        console.log('Got response Headers', httpEvent);
        break;
      case HttpEventType.Response:
        const fileName =
          httpEvent.headers.get('File-Name') || 'default-file-name';
        saveAs(
          new File([<Blob>httpEvent.body], fileName, {
            type: `${httpEvent.headers.get('Content-Type')};charset-utf-8`,
          })
        );
        this.fileStatusSubject.next({ status: '', type: '', percent: 0 });
        break;
      default:
        console.log(httpEvent);
        break;
    }
  }

  exportTableToexcel(): void {
    /* pass here the table id */
    let element = document.getElementById('product-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.writeFile(wb, 'report.xlsx');
  }
  exportToExcel() {
    const title = 'Audit Report';
    const header = ['ID', 'Date', 'Product Code', 'Product Name', 'Quantity'];
    const data = [
      [1, '01-12-2023 ', 'PC-100', "Apple", 10],
      [2, '01-12-2023 ', 'PC-100', "Apple", 100],
      [3, '01-12-2023 ', 'PC-100', "Apple", 1000],
      [4, '01-12-2023 ', 'PC-100', "Apple", 230],
      [5, '01-12-2023 ', 'PC-100', "Apple", 210],
      [6, '01-12-2023 ', 'PC-100', "Apple", 130],
      [7, '01-12-2023 ', 'PC-100', "Apple", 140],
      [8, '01-12-2023 ', 'PC-100', "Apple", 130],
      [9, '01-12-2023 ', 'PC-100', "Apple", 120],
      [10, '01-12-2023 ', 'PC-100', "Apple", 1330],
      [1, '01-12-2023 ', 'PC-100', "Apple", 103],
      [1, '01-12-2023 ', 'PC-100', "Apple", 130],
      [1, '01-12-2023 ', 'PC-100', "Apple", 10],
      [1, '01-12-2023 ', 'PC-100', "Apple", 10],
      [1, '01-12-2023 ', 'PC-100', "Apple", 10],
      [1, '01-12-2023 ', 'PC-100', "Apple", 10],
      [1, '01-12-2023 ', 'PC-100', "Apple", 10],
      [1, '01-12-2023 ', 'PC-100', "Apple", 10],
      [1, '01-12-2023 ', 'PC-100', "Apple", 10],
      [1, '01-12-2023 ', 'PC-100', "Apple", 10],
      [1, '01-12-2023 ', 'PC-100', "Apple", 10],
      [1, '01-12-2023 ', 'PC-100', "Apple", 10],
      [1, '01-12-2023 ', 'PC-100', "Apple", 10],
      [1, '01-12-2023 ', 'PC-100', "Apple", 10],
      [1, '01-12-2023 ', 'PC-100', "Apple", 10],
      [1, '01-12-2023 ', 'PC-100', "Apple", 10],
      [1, '01-12-2023 ', 'PC-100', "Apple", 10],
      [1, '01-12-2023 ', 'PC-100', "Apple", 10],
      [1, '01-12-2023 ', 'PC-100', "Apple", 10],
      [1, '01-12-2023 ', 'PC-100', "Apple", 10],
      [1, '01-12-2023 ', 'PC-100', "Apple", 10],
      [1, '01-12-2023 ', 'PC-100', "Apple", 10],
    ];

    this.exportService.exportToExcel(data, title, header, 'audit-report');
  }
}




