import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  [x: string]: any;

  constructor(private httpClient : HttpClient, private snackBar : MatSnackBar) {

  }
  baseURL:string="https://saiku.codes"

  public addContact( contact : any, callback : any ){
    this.httpClient.post("https://saiku.codes/ajes/contact",contact)
                  .subscribe((data:any)=>{
                      callback(data);
                  }
                  )
  }

  public addCareer( career : any, callback : any){
    console.log(career);
    this.httpClient.post("https://saiku.codes/ajes/careers",career)
                  .subscribe((data : any)=>{
                    callback(data);
                  })
  }

 public addDemo( demo : any, callback : any){
  console.log(demo);
  this.httpClient.post("https://saiku.codes/ajes/demo",demo)
                  .subscribe((data : any)=>{
                    callback(data);
                  })
 }

  public addLogin( login : any, callback : any ){
    this.httpClient.post("https://saiku.codes/ajes/login",login)
                  .subscribe((data:any)=>{
                      callback(data);
                  }
                  )
  }


  public logIn(login : any,callback : any){
    console.log(login);
    this.httpClient.post("https://saiku.codes/ajes/logging1",login)
                    .subscribe(
                      (data: any) => {
                        callback(data);
                        this.openSuccessSnackBar('Logged In Successfully');
                      },
                      (error) => {
                        // Error callback
                        console.error('An error occurred:', error);
                        if(error.status=='200'){
                          this.openSuccessSnackBar('Logged In Successfully');
                        }else{
                          this.openErrorSnackBar('Error Submitting form');
                        }
                        //alert("Error Submitting form");
                        // You can handle the error here, for example, show a user-friendly message
                      });
 }

 private openSuccessSnackBar(message: string): void {
  this.snackBar.open(message, 'Close', {
    duration: 6000,
    panelClass: ['success-snackbar'],
    verticalPosition: 'top' // Apply the success styles
  });
}

private openErrorSnackBar(message: string): void {
  this.snackBar.open(message, 'Close', {
    duration: 6000,
    panelClass: ['error-snackbar'],
    verticalPosition: 'top' // Apply the error styles
  });
}

 public addUser(user : any,callback : any){
    this.httpClient.post(this.baseURL+"user",user)
                   .subscribe((data : any)=>{
                     callback(data);
                   })
 }

 public addEnquiry(enquiry : any, callback : any){
  this.httpClient.post(this.baseURL+"contact",enquiry)
                  .subscribe((data : any)=>{
                    callback(data);
                  })
 }

 public getAllEnquiries(callback : any){
  this.httpClient.get(this.baseURL+"contact/")
                 .subscribe((data : any)=>{
                    callback(data);
                 })
}


 public getUserByUserName(userName : any,callback : any){
     this.httpClient.get("https://saiku.codes/ajes/user"+userName)
                    .subscribe((data : any)=>{
                       console.log(data);
                       callback(data);
                    })
 }           
 
 

 public getAllCareers(callback : any){
    this.httpClient.get(this.baseURL+"careers/")
                   .subscribe((data : any)=>{
                      callback(data);
                   })
 }




 public getAllDemo(callback : any){
  this.httpClient.get(this.baseURL+"demo/")
                  .subscribe((data : any)=>{
                    callback(data);
                  })
 }




 getFile(i:any): Observable<Blob> {
  return this.httpClient.get(this.baseURL+'downloadImage2/'+i, { responseType: 'blob' });
}

getClientIP(): Observable<string> {
  // Specify the response type as 'text' to ensure it's treated as a string
  return this.httpClient.get('https://api.ipify.org?format=json', { responseType: 'text' })
                          .pipe(
                            map((response: string) => {
                              try {
                                const jsonResponse = JSON.parse(response);
                                if (jsonResponse && jsonResponse.ip) {
                                  return jsonResponse.ip;
                                } else {
                                  throw new Error('IP address not found in response');
                                }
                              } catch (error) {
                                console.error('Error parsing response:', error);
                                throw new Error('Failed to extract IP address');
                              }
                            }),
                            catchError((error: any) => {
                              console.error('HTTP error:', error);
                              throw new Error('Failed to fetch IP address');
                            })
                          );
}
}
