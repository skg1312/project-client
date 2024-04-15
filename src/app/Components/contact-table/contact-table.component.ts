import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MainServiceService } from 'src/app/main-service.service';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css']
})
export class ContactTableComponent {
  ELEMENT_DATA: any[] = [];

  displayedColumns = ['Slno', 'Name' , 'Email', 'Phone No'];
  dataSource = new MatTableDataSource<Element>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private service : MainServiceService){
  
  this.service.getAllEnquiries((data : any)=>{
    console.log(data);
    this.ELEMENT_DATA = data;
 })
}

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
