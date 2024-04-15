import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainServiceService } from 'src/app/main-service.service';

@Component({
  selector: 'app-copypaste',
  templateUrl: './copypaste.component.html',
  styleUrls: ['./copypaste.component.css']
})
export class CopypasteComponent {
  title = 'angularProj2';
  sideNavStatus: boolean = false;
  clientIP : any = '';
  allow : boolean = false;
  allow1 : boolean = false;
  isLoggedIn: boolean = false; // Flag to track login status

  constructor(private service : MainServiceService,private route: ActivatedRoute){
     this.service.getClientIP()
                 .subscribe((data : any)=>{
                    console.log(data);
                    this.clientIP = data;
                    console.log(this.clientIP)
                    if(this.clientIP == "122.161.101.193"){ 
                       this.allow = true;
                       console.log(this.allow);
                       if(localStorage.length!=0){
                         this.allow1 = true;
                         this.isLoggedIn = true;
                       }
                    }
                 })
  }

  public addEnquiry(){
    this.service.addEnquiry(this.addEnquiry, (data : any)=>{
      console.log(data);
    })
    }

    isCollapsed = false;

    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
    }

  
}
