import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { titlebarComponent } from './Components/titlebar/titlebarComponent';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ServicesComponent } from './Components/services/services.component';
import { ContactComponent } from './Components/contact/contact.component';
import { CareersComponent } from './Components/careers/careers.component';
import { ProductsComponent } from './Components/products/products.component';
import { ResumesComponent } from './Components/resumes/resumes.component';
import { UserComponent } from './Components/user/user.component';
import { DemoComponent } from './Components/demo/demo.component';
import { ContactTableComponent } from './Components/contact-table/contact-table.component';
import { AuthGuardGuard } from './auth-guard.guard';



const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'title', component:titlebarComponent},
  {path: 'login', component:LoginComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'careers', component: CareersComponent},
  {path: 'products', component:ProductsComponent},
  {path: 'login', component:LoginComponent},
  {path: 'resumes', component:ResumesComponent,canActivate:[AuthGuardGuard]},
  {path:'user',component:UserComponent,canActivate:[AuthGuardGuard]},
  {path:'demo' , component:DemoComponent,canActivate:[AuthGuardGuard]},
  {path:'table', component:ContactTableComponent,canActivate:[AuthGuardGuard]},
  {path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

 }
