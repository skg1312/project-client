import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Career, Contact, ImageModel } from 'src/app/commons/common.objects';
import { MainServiceService } from 'src/app/main-service.service';
import { MainService } from '../main.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent  implements AfterViewInit {

  letters : any[] = [];
  
  constructor(private service : MainServiceService, private httpClient : HttpClient){

  }




  ngAfterViewInit(): void {
    const placeholders = document.querySelectorAll('.styled-input__placeholder-text') as NodeListOf<HTMLElement>;
    const inputs = document.querySelectorAll('.styled-input__input') as NodeListOf<HTMLInputElement>;

    placeholders.forEach((el, i) => {
      let value = el.innerText;
      let html = '';
      for (let w of value) {
        if (!value) value = '&nbsp;';
        html += `<span class="letter">${w}</span>`;
      }
      el.innerHTML = html;
    });

    inputs.forEach((el) => {
      let parent = el.parentNode as HTMLElement;
      el.addEventListener('focus', () => {
        parent.classList.add('filled');
        this.placeholderAnimationIn(parent, true);
      }, false);
      el.addEventListener('blur', () => {
        if (el.value.length) return;
        parent.classList.remove('filled');
        this.placeholderAnimationIn(parent, false);
      }, false);
    });

    setTimeout(() => {
      document.body.classList.add('on-start');
    }, 100);

    setTimeout(() => {
      document.body.classList.add('document-loaded');
    }, 1800);
  }

  // act : any = 0;

  placeholderAnimationIn(parent: HTMLElement, action: boolean) {
    let act = action ? 'add' : 'remove';
    let letters = parent.querySelectorAll('.letter') as NodeListOf<HTMLElement>;
    this.letters = Array.from(letters);
    if (!action) this.letters = this.letters.reverse();
    letters.forEach((el, i) => {
      setTimeout(() => {
        let contains = parent.classList.contains('filled');
        if ((action && !contains) || (!action && contains)) return;
        if (act === 'add') {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      }, 50 * i);
    });
  }
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
   
  }
  
  phone = new FormControl('',[Validators.required]);
  career : Career = {
    careerId: 0,
    name: '',
    email: '',
    phoneNumber: '',
    attachFile: '',
  }

  public addCareer(){
     this.service.addCareer(this.career, (data : any)=>{
                  console.log(data);
                  this.simpleAlert();
     })
  }

  image : ImageModel = {
    id: 0,
    name: '',
    type: ''
  }



  response: string = '';
  selectedfile : string = '';
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.selectedfile = event.target.files[0];
    }


    isUploaded: boolean = false;
  public imageUpload(){


  
    const fileInput = document.querySelector<HTMLInputElement>('#fileInput');
    const file = fileInput?.files?.[0];

    if (!this.selectedfile) {
      alert('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedfile);


    this.httpClient.post<any>('http://localhost:5050/ajes/upload', formData)
             .subscribe(
                      (response) => {
                        this.image = response;
                        console.log(this.image);
                        this.career.attachFile = this.image.name;
                        this.response = 'File upload success.';
                        this.isUploaded = true;
                        
                      
                      },
                      (error) => {
                        this.response = 'File upload error: ' + error.status;
                      
                      }
                    );
                   
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

  areAllFieldsFilled(): boolean {
    return (
      this.career.name.trim() !== '' &&
      this.career.phoneNumber.trim() !== '' &&
      this.career.email.trim() !== ''
    );
  }
  



  // submitForm(){
  //   if (this.areAllFieldsFilled()) {
  //     this.uploadResume(); 
  //     this.simpleAlert();
  //     this.addCareer();
  //   } else {
  //     alert('Please fill in all required fields before submitting.');    }
  // }


  // uploadResume(){
  //   this.isUploaded = true;
  // }
}



