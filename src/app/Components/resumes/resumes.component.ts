import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MainService } from '../main.service';
import { MainServiceService } from 'src/app/main-service.service';

@Component({
  selector: 'app-resumes',
  templateUrl: './resumes.component.html',
  styleUrls: ['./resumes.component.css']
})
export class ResumesComponent {
  ELEMENT_DATA: any[] = [];

  displayedColumns = ['Slno', 'Name' , 'Email', 'Phone No','Action'];
  dataSource = new MatTableDataSource<Element>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private service : MainServiceService){
         this.service.getAllCareers((data : any)=>{
            console.log(data);
            this.ELEMENT_DATA = data;
         })
  }

  public getFile(careerId : any){
    console.log(careerId);
    for(let i = 0;i<this.ELEMENT_DATA.length+1;i++){
       if(i===careerId){
        console.log(i);
        //console.log(this.ELEMENT_DATA[i].attachFile);
        this.service.getFile(i).subscribe((fileBlob: Blob) => {
          const file = new Blob([fileBlob], { type: 'application/pdf' });

          // Create a URL for the Blob
            const fileURL = window.URL.createObjectURL(file);

            // Create a temporary anchor element
            const downloadLink = document.createElement('a');
            downloadLink.href = fileURL;
            downloadLink.download = careerId+'.pdf'; // Set your desired file name

            // Simulate a click on the anchor to trigger the download
            downloadLink.click();

            // Clean up the URL object after the download starts
            window.URL.revokeObjectURL(fileURL);
        });
       }
    }
  }

  
  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

