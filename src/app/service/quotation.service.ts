import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuatationService implements OnInit{

  constructor(private quatationService: QuatationService)
  
  
  { 

 }
  ngOnInit(): void {
    this.onGetQuatation();  }

 onGetQuatation():any{

  this.quatationService.onGetQuatation().subscribe(
(response:any)=>console.log(response),
(error:any)=>console.log("try again"),
()=>console.log("quatations retrieved"),

  );
 }

 createQuatation(quatation:any):Observable<Quatation >{

return this.http.post<any>('${this.apiUrl}/quatations',quatation);}


}
