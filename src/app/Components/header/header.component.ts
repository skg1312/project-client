import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainServiceService } from 'src/app/main-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  

constructor(private route: ActivatedRoute) {}

  isActive(route: string): boolean {
    return this.route.snapshot.url.join('/') === route;
  }
}
