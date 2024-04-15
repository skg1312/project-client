import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Contact, contact } from 'src/app/commons/common.objects';
import { MainServiceService } from 'src/app/main-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {


  contact: contact = {
    contactId: 0,
    name: '',
    email: '',
    phoneNumber: '',
    description: ''
  }


  // name = new FormControl('', [Validators.required]);
  // email = new FormControl('', [Validators.required, Validators.email]);
  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }
  // phone = new FormControl('', [Validators.required]);

  constructor(private service: MainServiceService) {

  }


  ngOnInit() {
    this.addContactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email,this.customDomainCheck('.com')]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
      description: new FormControl('', [Validators.required]),
    });
  }
  public addContactForm!: FormGroup;
  public checkError = (controlName: string, errorName: string) => {
    return this.addContactForm.controls[controlName].hasError(errorName);
  }

  private customDomainCheck(domain: string) {
    return (control: AbstractControl): ValidationErrors | null => {
      const value: string = control.value;
      if (value && !value.toLowerCase().includes(domain.toLowerCase())) {
        return { customDomainCheck: true };
      }
      return null;
    };
  }


  public addContact() {
    console.log(this.contact)
    this.service.addContact(this.contact, (data: any) => {
      console.log(data);
      this.simpleAlert();
      this.addContactForm.reset();
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
