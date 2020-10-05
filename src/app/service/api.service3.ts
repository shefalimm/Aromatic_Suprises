import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
  })

  export class ApiService3 {
  
    baseUri:string = 'http://localhost:4000/api';
    headers = new HttpHeaders().set('Content-Type', 'application/json');
   
  
    constructor(private http: HttpClient,private router: Router) { }


login(data):Observable<any>{

  let url = `${this.baseUri}/login/${data.email}/${data.password}/${data.usertype}`;
 
   return this.http.get(url).pipe(catchError(this.errorMgmt));

 }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}