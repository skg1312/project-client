import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MainService } from '../Components/main.service';
import { MainServiceService } from '../main-service.service';
import { Login, User } from '../commons/common.objects';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.userName.hasError('required')) {
      return 'You must enter a value';
    }
    return this.userName.hasError('UserName') ? 'Not a valid Username' : '';
  }
  
  login : Login = {
    // loginId: 0,
    userName: '',
    password: ''
  }

  user:User={
    user_id: 0,
    user_Username: '',
    user_email: '',
    user_phone1: '',
    user_phone2: '',
    user_password: '',
    role: {
      role_id: 0,
      role_description: '',
    },
    userId: 0
  }
  userdata: any=0
  invalidUser: boolean=false
  authenticated: boolean=false;

  public constructor(private service : MainServiceService, private httpClient : HttpClient,private router : Router, private snackBar : MatSnackBar){}
  ngOnInit(): void {
    localStorage.clear();
  }
  
  public addLogin(){
    this.service.addLogin(this.login, (data : any)=>{
                 console.log(data);
    })
 }
 public onLogin(uid : string, pwd : string){
  console.log(uid, " " , pwd);
  this.login.userName = uid;
  this.login.password = pwd;
  console.log(uid, "2 " , pwd);
  // this.service.getUserByUserName(uid,(data : any)=>{
  //    console.log(data);
  //    this.user = data;
  // })
  this.service.logIn(this.login,(data : any)=>{
     this.userdata = data;
     console.log(uid, "3 " , pwd);
     if(this.userdata.length == 0){
        this.invalidUser = true;
     }
     else{
        this.authenticated = true;
        console.log(JSON.stringify(this.userdata));

        const jsonString = JSON.stringify(this.userdata);

          // Parse the JSON string to an object
          const jsonObject = JSON.parse(jsonString);

          // Access the "jwtToken" property
          const jwtToken = jsonObject.jwtToken;

          console.log(jwtToken);
          
        
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('username', uid);
        this.router.navigate(["/dash",{data : this.user.userId}]); 
     }
  })
}
// // private openSuccessSnackBar(message: string): void {
// //   this.snackBar.open(message, 'Close', {
// //     duration: 6000,
// //     panelClass: ['success-snackbar'],
// //     verticalPosition: 'top' // Apply the success styles
// //   });
// // }

// // private openErrorSnackBar(message: string): void {
// //   this.snackBar.open(message, 'Close', {
// //     duration: 6000,
// //     panelClass: ['error-snackbar'],
// //     verticalPosition: 'top' // Apply the error styles
// //   });
// }
simpleAlert(){
  Swal.fire('Submitted Successfully');
}
}