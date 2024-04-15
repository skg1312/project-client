import { Component, HostListener } from '@angular/core';
import { MainServiceService } from 'src/app/main-service.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [
      state('inactive', style({ opacity: 0, transform: 'translateY(50px)' })),
      state('active', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('inactive => active', animate('1.3s ease-in-out')),
    ]),
  ],
})
export class HomeComponent {
  title = 'angularProj2';
  sideNavStatus: boolean = false;
  clientIP: any = '';
  allow: boolean = false;
  allow1: boolean = false;
  isLoggedIn: boolean = false; // Flag to track login status

  constructor(private service: MainServiceService) {
    this.service.getClientIP()
      .subscribe((data: any) => {
        console.log(data);
        this.clientIP = data;
        console.log(this.clientIP)
        if (this.clientIP == "122.161.101.193") {
          this.allow = true;
          console.log(this.allow);
          if (localStorage.length != 0) {
            this.allow1 = true;
            this.isLoggedIn = true;
          }
        }
      })


      this.aboutAnimationState = window.innerWidth < 768 ? 'active' : 'inactive';
      this.contactAnimationState = window.innerWidth < 768 ? 'active' : 'inactive';

  }


  aboutAnimationState: string;
  contactAnimationState: string;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    // Adjust these values based on your specific layout
    const aboutElement = document.getElementById('about');
    const contactElement = document.getElementById('contact');
    const scrollPosition = window.scrollY + window.innerHeight;

    // Update animation states based on scroll position
    if (aboutElement && scrollPosition > aboutElement.offsetTop) {
      this.aboutAnimationState = 'active';
    }

    if (contactElement && scrollPosition > contactElement.offsetTop) {
      this.contactAnimationState = 'active';
    }
  }
}
