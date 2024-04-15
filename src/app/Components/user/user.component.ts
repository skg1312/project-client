import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MainServiceService } from 'src/app/main-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user : any = {
    userId : 0,
    userName : '',
    email : '',
    password : '',
    role : []
  }

  constructor(private service : MainServiceService, private snackBar : MatSnackBar){

  }

  public onSubmit(){
    this.user.userName = this.user.email;
    this.user.role = [];
    this.service.addUser(this.user,(data : any)=>{
        console.log(data);
    })
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
}
