import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Demo } from 'src/app/commons/common.objects';
import { MainServiceService } from 'src/app/main-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  phone = new FormControl('', [Validators.required]);

  constructor(private service : MainServiceService){

  }

  demo : Demo = {
    demoId: 0,
    name: '',
    email: '',
    phoneNumber: '',
    description: 'Demo'
  }

  // public addDemo(){
  //    this.service['addDemo'](this.demo, (data : any)=>{
  //                 console.log(data);
  //    })
  // }

  public addDemo(){
    this.service.addDemo(this.demo, (data : any)=>{
                 console.log(data);

                 this.simpleAlert();
    })
 }

 simpleAlert() {
  Swal.fire({
    title: 'Submitted Successfully',
    icon: 'success',
    customClass: {
      title: 'professional-font',
    },
    showCloseButton: true,
    showConfirmButton: false,
  });
}
}
