import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { HomeComponent } from './Components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MaterialModule } from './material/material.module';
import { ChartModule } from 'angular2-chartjs';
import { NgxPrintModule } from 'ngx-print';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AboutComponent } from './Components/about/about.component';
import { ServicesComponent } from './Components/services/services.component';
import { CopypasteComponent } from './Components/copypaste/copypaste.component';
import { ContactComponent } from './Components/contact/contact.component';
import { CareersComponent } from './Components/careers/careers.component';
import { ProductsComponent } from './Components/products/products.component';
import { ResumesComponent } from './Components/resumes/resumes.component';
import { UserComponent } from './Components/user/user.component';
import { DemoComponent } from './Components/demo/demo.component';
import { ContactTableComponent } from './Components/contact-table/contact-table.component';
import { HeaderComponent } from './Components/header/header.component';


function agGridWithComponents() {
  return {
    ngModule: AgGridModule,
    providers: [],
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    AboutComponent,
    ServicesComponent,
    CopypasteComponent,
    ContactComponent,
    CareersComponent,
    ProductsComponent,
    ResumesComponent,
    UserComponent,
    DemoComponent,
    ContactTableComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSlideToggleModule,
    MatTabsModule,
    NgxPrintModule,
    MaterialModule,
    ChartModule,
    agGridWithComponents(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
