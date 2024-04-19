import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  baseUri: string = 'http://159.89.164.226:5050/ajse';

  constructor(private httpClient: HttpClient) {}

  //  Complete company
  public getAllCompanies(callback: any) {
    this.httpClient.get(this.baseUri + '/company/').subscribe((data) => {
      callback(data);
    });
  }

  public getCompany(id: number, callback: any) {
    this.httpClient
      .get(this.baseUri + '/company/' + id)
      .subscribe((data: any) => {
        callback(data);
      });
  }

  public addCompany(company: any, callback: any) {
    this.httpClient
      .post(this.baseUri + '/company', company)
      .subscribe((data: any) => {
        this.httpClient
          .get(this.baseUri + '/company/')
          .subscribe((data: any) => {
            callback(data);
          });
      });
  }

  public deleteCompany(id: number, callback: any) {
    this.httpClient
      .delete(this.baseUri + '/company/' + id)
      .subscribe((data: any) => {
        this.httpClient
          .get(this.baseUri + '/company/')
          .subscribe((data: any) => {
            callback(data);
          });
      });
  }

  public updateCompany(id: number, company: any, callback: any) {
    this.httpClient
      .put(this.baseUri + '/company/' + id, company)
      .subscribe((data: any) => {
        this.httpClient
          .get(this.baseUri + '/company/')
          .subscribe((data: any) => {
            callback(data);
          });
      });
  }
  // Ending of company

  //complete companyEntity

  public getAllCompaniesentity(callback: any) {
    this.httpClient.get(this.baseUri + '/companyEntity/').subscribe((data) => {
      callback(data);
    });
  }

  public getCompanyentity(entityId: number, callback: any) {
    this.httpClient
      .get(this.baseUri + '/companyEntity/' + entityId)
      .subscribe((data: any) => {
        callback(data);
      });
  }

  public addCompanyentity(companyEntity: any, callback: any) {
    this.httpClient
      .post(this.baseUri + '/companyEntity', companyEntity)
      .subscribe((data: any) => {
        this.httpClient
          .get(this.baseUri + '/companyEntity/')
          .subscribe((data: any) => {
            callback(data);
          });
      });
  }

  public deleteCompanyentity(entityId: number, callback: any) {
    this.httpClient
      .delete(this.baseUri + '/companyEntity/' + entityId)
      .subscribe((data: any) => {
        this.httpClient
          .get(this.baseUri + '/companyEntity/')
          .subscribe((data: any) => {
            callback(data);
          });
      });
  }

  public updateCompanyentity(
    entityId: number,
    companyEntity: any,
    callback: any
  ) {
    this.httpClient
      .put(this.baseUri + '/companyEntity/' + entityId, companyEntity)
      .subscribe((data: any) => {
        this.httpClient
          .get(this.baseUri + '/companyEntity/')
          .subscribe((data: any) => {
            callback(data);
          });
      });
  }
  // End of companyEntity

  //  Complete Department
  public getAlldepartments(callback: any) {
    this.httpClient.get(this.baseUri + '/department/').subscribe((data) => {
      callback(data);
    });
  }

  public getdepartment(departmentId: number, callback: any) {
    this.httpClient
      .get(this.baseUri + '/department/' + departmentId)
      .subscribe((data: any) => {
        callback(data);
      });
  }

  public adddepartment(department: any, callback: any) {
    this.httpClient
      .post(this.baseUri + '/department', department)
      .subscribe((data: any) => {
        this.httpClient
          .get(this.baseUri + '/department/')
          .subscribe((data: any) => {
            callback(data);
          });
      });
  }

  public deletedepartment(departmentId: number, callback: any) {
    this.httpClient
      .delete(this.baseUri + '/department/' + departmentId)
      .subscribe((data: any) => {
        this.httpClient
          .get(this.baseUri + '/department/')
          .subscribe((data: any) => {
            callback(data);
          });
      });
  }

  public updatedepartment(
    departmentId: number,
    department: any,
    callback: any
  ) {
    this.httpClient
      .put(this.baseUri + '/department/' + departmentId, department)
      .subscribe((data: any) => {
        this.httpClient
          .get(this.baseUri + '/department/')
          .subscribe((data: any) => {
            callback(data);
          });
      });
  }

  public getDepartmentByEntity(entityId: number, callback: any) {
    this.httpClient
      .get(this.baseUri + '/department/companyEntity/' + entityId)
      .subscribe((data: any) => {
        callback(data);
      });
  }
  // Ending of Department

  // Complete Employee

  getDepList(): Observable<any[]> {
    return this.httpClient.get<any>(this.baseUri + '/employee/');
  }

  public getAllemployees(callback: any) {
    this.httpClient.get(this.baseUri + '/employee').subscribe((data) => {
      callback(data);
    });
  }

  public addemployee(employee: any, callback: any) {
    this.httpClient
      .post(this.baseUri + '/employee', employee)
      .subscribe((data: any) => {
        this.httpClient
          .get(this.baseUri + '/employee/')
          .subscribe((data: any) => {
            callback(data);
          });
      });
  }

  // public addemployee(employee: any, callback: any): void {
  //   const url = `${this.baseUri}/employee`;

  //   this.httpClient
  //     .post(url, { ...employee, departmentId: employee.Department })
  //     .subscribe((data: any) => {
  //       this.httpClient
  //         .get(this.baseUri + '/employee/')
  //         .subscribe((data: any) => {
  //           callback(data);
  //         });
  //     });
  // }

  public getemployee(employeeId: number, callback: any) {
    this.httpClient
      .get(this.baseUri + '/employee/' + employeeId)
      .subscribe((data: any) => {
        callback(data);
      });
  }

  public deleteemployee(employeeId: number, callback: any) {
    this.httpClient
      .delete(this.baseUri + '/employee/' + employeeId)
      .subscribe((data: any) => {
        this.httpClient
          .get(this.baseUri + '/employee')
          .subscribe((data: any) => {
            callback(data);
          });
      });
  }

  public updateemployee(employeeId: number, employee: any, callback: any) {
    this.httpClient
      .put(this.baseUri + '/employee/' + employeeId, employee)
      .subscribe((data: any) => {
        this.httpClient
          .get(this.baseUri + '/employee')
          .subscribe((data: any) => {
            callback(data);
          });
      });
  }

  //  End  of Employee

  // Complete  role
  public getAllroles(callback: any) {
    this.httpClient.get(this.baseUri + '/roles/').subscribe((data) => {
      callback(data);
    });
  }

  public getrole(roleId: number, callback: any) {
    this.httpClient
      .get(this.baseUri + '/roles/' + roleId)
      .subscribe((data: any) => {
        callback(data);
      });
  }

  public addrole(roles: any, callback: any) {
    this.httpClient
      .post(this.baseUri + '/roles', roles)
      .subscribe((data: any) => {
        this.httpClient.get(this.baseUri + '/roles/').subscribe((data: any) => {
          callback(data);
        });
      });
  }

  public deleterole(roleId: number, callback: any) {
    this.httpClient
      .delete(this.baseUri + '/roles/' + roleId)
      .subscribe((data: any) => {
        this.httpClient.get(this.baseUri + '/roles/').subscribe((data: any) => {
          callback(data);
        });
      });
  }

  public updaterole(roleId: number, roles: any, callback: any) {
    this.httpClient
      .put(this.baseUri + '/roles/' + roleId, roles)
      .subscribe((data: any) => {
        this.httpClient.get(this.baseUri + '/roles/').subscribe((data: any) => {
          callback(data);
        });
      });
  }
  // Ending of Role

  //complete Designation

  public getAllDesignation(callback: any) {
    this.httpClient.get(this.baseUri + '/designation/').subscribe((data) => {
      callback(data);
    });
  }

  public getDesignation(designationId: number, callback: any) {
    this.httpClient
      .get(this.baseUri + '/designation/' + designationId)
      .subscribe((data: any) => {
        callback(data);
      });
  }

  public addDesignation(designation: any, callback: any) {
    this.httpClient
      .post(this.baseUri + '/designation', designation)
      .subscribe((data: any) => {
        this.httpClient
          .get(this.baseUri + '/designation/')
          .subscribe((data: any) => {
            callback(data);
          });
      });
  }

  public deleteDesignation(designationId: number, callback: any) {
    this.httpClient
      .delete(this.baseUri + '/designation/' + designationId)
      .subscribe((data: any) => {
        this.httpClient
          .get(this.baseUri + '/designation/')
          .subscribe((data: any) => {
            callback(data);
          });
      });
  }

  public updateDesignation(
    designationId: number,
    designation: any,
    callback: any
  ) {
    this.httpClient
      .put(this.baseUri + '/designation/' + designationId, designation)
      .subscribe((data: any) => {
        this.httpClient
          .get(this.baseUri + '/designation/')
          .subscribe((data: any) => {
            callback(data);
          });
      });
  }
  // End of Designation

  // Complete Section

  public getAllsections(callback: any) {
    this.httpClient.get(this.baseUri + '/section/').subscribe((data) => {
      callback(data);
    });
  }

  public getsection(sectionId: number, callback: any) {
    this.httpClient
      .get(this.baseUri + '/section/' + sectionId)
      .subscribe((data: any) => {
        callback(data);
      });
  }

  public addsection(section: any, callback: any) {
    this.httpClient
      .post(this.baseUri + '/section', section)
      .subscribe((data: any) => {
        this.httpClient
          .get(this.baseUri + '/section/')
          .subscribe((data: any) => {
            callback(data);
          });
      });
  }

  public deletesection(sectionId: number, callback: any) {
    this.httpClient
      .delete(this.baseUri + '/section/' + sectionId)
      .subscribe((data: any) => {
        this.httpClient
          .get(this.baseUri + '/section/')
          .subscribe((data: any) => {
            callback(data);
          });
      });
  }

  public updatesection(sectionId: number, section: any, callback: any) {
    this.httpClient
      .put(this.baseUri + '/section/' + sectionId, section)
      .subscribe((data: any) => {
        this.httpClient
          .get(this.baseUri + '/section/')
          .subscribe((data: any) => {
            callback(data);
          });
      });
  }

  public getSectionByDepartment(departmentId: number, callback: any) {
    this.httpClient
      .get(this.baseUri + '/section/department/' + departmentId)
      .subscribe((data: any) => {
        callback(data);
      });
  }
  // End of Section

  // Complete menu

  public getAllmenus(callback: any) {
    this.httpClient.get(this.baseUri + '/menuGroup/').subscribe((data) => {
      callback(data);
    });
  }

  public getmenu(menuGroupId: number, callback: any) {
    this.httpClient
      .get(this.baseUri + '/menuGroup/' + menuGroupId)
      .subscribe((data: any) => {
        callback(data);
      });
  }

  public addmenu(menu: any, callback: any) {
    this.httpClient
      .post(this.baseUri + '/menuGroup', menu)
      .subscribe((data: any) => {
        this.httpClient
          .get(this.baseUri + '/menuGroup/')
          .subscribe((data: any) => {
            callback(data);
          });
      });
  }

  public deletemenu(menuGroupId: number, callback: any) {
    this.httpClient
      .delete(this.baseUri + '/menuGroup/' + menuGroupId)
      .subscribe((data: any) => {
        this.httpClient
          .get(this.baseUri + '/menuGroup/')
          .subscribe((data: any) => {
            callback(data);
          });
      });
  }

  public updatemenu(menuGroupId: number, menu: any, callback: any) {
    this.httpClient
      .put(this.baseUri + '/menuGroup/' + menuGroupId, menu)
      .subscribe((data: any) => {
        this.httpClient
          .get(this.baseUri + '/menuGroup/')
          .subscribe((data: any) => {
            callback(data);
          });
      });
  }
  // End of Menu

  // Complete User
  public getAllusers(callback: any) {
    this.httpClient.get(this.baseUri + '/user/').subscribe((data) => {
      callback(data);
    });
  }

  public getuser(menuGroupId: number, callback: any) {
    this.httpClient
      .get(this.baseUri + '/user/' + menuGroupId)
      .subscribe((data: any) => {
        callback(data);
      });
  }

  public adduser(user: any, callback: any) {
    this.httpClient
      .post(this.baseUri + '/user', user)
      .subscribe((data: any) => {
        this.httpClient.get(this.baseUri + '/user/').subscribe((data: any) => {
          callback(data);
        });
      });
  }

  public deleteuser(menuGroupId: number, callback: any) {
    this.httpClient
      .delete(this.baseUri + '/user/' + menuGroupId)
      .subscribe((data: any) => {
        this.httpClient.get(this.baseUri + '/user/').subscribe((data: any) => {
          callback(data);
        });
      });
  }

  public updateuser(menuGroupId: number, user: any, callback: any) {
    this.httpClient
      .put(this.baseUri + '/user/' + menuGroupId, user)
      .subscribe((data: any) => {
        this.httpClient.get(this.baseUri + '/user/').subscribe((data: any) => {
          callback(data);
        });
      });
  }

  // End of User

  baseUri1: string = 'http://159.89.164.226:5050/Visitor';
  baseUri2: string = 'http://159.89.164.226:5050/Appointment';
  baseUri3: string = 'http://159.89.164.226:5050/Section';
  baseUri4: string = 'http://159.89.164.226:5050/Facility';
  baseUri5: string = 'http://159.89.164.226:5050/Vehicle';
  baseUri6: string = 'http://159.89.164.226:5050/User/Userexist/';
  baseUri7: string = 'http://159.89.164.226:5050/Item';
  baseUri8: string = 'http://159.89.164.226:5050/User';
  baseUri9 : string = "http://159.89.164.226:5050" ;
  baseUri10 : string ="http://159.89.164.226:5050/SectionVisited";
  baseUri11 : string = "http://159.89.164.226:5050/FacilityVisited";

    public addVisitor(Visitor: any,callback:any) {
      this.httpClient.post(this.baseUri1,Visitor)
                     .subscribe((data: any) => {
                        console.log(data)
                        callback(data);
                     });
    }

    public addAppointment(Appointment: any,callback : any){
      this.httpClient.post(this.baseUri2,Appointment)
                     .subscribe((data:any) => {
                      console.log(data)
                      callback(data);
                    });
    }

    public addVehicle(Vehicle: any,callback : any){
      this.httpClient.post(this.baseUri5,Vehicle)
                     .subscribe((data:any) => {
                      console.log(data)
                      callback(data)
                     });
    }

    public addItem(Item: any,callback:any){
      this.httpClient.post(this.baseUri7,Item)
                     .subscribe((data:any) => {
                      console.log(data)
                      callback(data)
                     });
    }

    public getAllSection(callback : any){
      this.httpClient.get(this.baseUri3)
                        .subscribe((data:any)=>{
                          callback(data);
                          console.log(data);
                        })
    }

    public getAllFacility(callback : any){
      this.httpClient.get(this.baseUri4)
                        .subscribe((data:any)=>{
                          callback(data);
                          console.log(data);
                        })
    }

    public getAllUser(callback : any){
      this.httpClient.get(this.baseUri8)
                        .subscribe((data:any)=>{
                          callback(data);
                          console.log(data);
                        })
    }

    public addTemplate(template : any,callback:any){
      this.httpClient.post(this.baseUri9+"/api/template",template)
                     .subscribe((data : any)=>{
                        console.log(data)
                        callback(data)
                     })
    }

    

    public checkUserExistByUsername(User_Username: string, callback : any){
      this.httpClient.get(this.baseUri6+User_Username)
                     .subscribe((data:any)=>{
                      console.log("Username exists : "+(JSON.stringify(data)));
                      callback(null,false,data);
                    },(rg:any)=>{
                      console.log("Username data does not exist: "+(JSON.stringify(rg)));
                      callback(rg,true,null);
                    })
  }

  public getUserById(userid:number , callback :any){
    this.httpClient.get(this.baseUri8+'/'+userid)
    .subscribe((data:any)=>{
      console.log(data);
      callback(data)
    })
  }

  public getSectionById(sectionid:number , callback :any){
    this.httpClient.get(this.baseUri3+'/'+sectionid)
    .subscribe((data:any)=>{
      console.log(data);
      callback(data)
    })
  }

  public getFacilityById(facilityid:number , callback :any){
    this.httpClient.get(this.baseUri4+'/'+facilityid)
    .subscribe((data:any)=>{
      console.log(data);
      callback(data)
    })
  }

  public addSectionVisited(SectionVisited :any,callback:any){
    this.httpClient.post(this.baseUri10,SectionVisited)
    .subscribe((data:any) =>{
      console.log(data);
      callback(data)
    })
  }

  public addFacilityVisited(FacilityVisited :any,callback:any){
    this.httpClient.post(this.baseUri11,FacilityVisited)
    .subscribe((data:any) =>{
      console.log(data);
      callback(data)
    })
  }

  baseUri20: string = 'http://159.89.164.226:5050';
  message: string = '';

  //  Complete company
  // public fetchAllCompany(callback: any) {
  //   this.httpClient.get(this.baseUri + '/company/').subscribe((data) => {
  //     callback(data);
  //   });
  // }

  public fetchAllVisitor(callback: any) {
    this.httpClient.get(this.baseUri20 + '/Visitor').subscribe((data) => {
      callback(data);
    });
  }

  //DashboardCount
  public fetchAllVisitorCount(callback: any) {
    this.httpClient.get(this.baseUri20 + '/Appointmentcount').subscribe((data) => {
      callback(data);
    });
  }

  public fetchcheckinVisitorCount(callback: any) {
    this.httpClient.get(this.baseUri20 + '/Appointmentcheckincount').subscribe((data) => {
      callback(data);
    });
  }

  public fetchcheckoutVisitorCount(callback: any) {
    this.httpClient.get(this.baseUri20 + '/Appointmentcheckoutcount').subscribe((data) => {
      callback(data);
    });
  }

  public fetchYetToVisitVisitorCount(callback: any) {
    this.httpClient.get(this.baseUri20 + '/Appointmentyettovisitcount').subscribe((data) => {
      callback(data);
    });
  }

  public getImageFromServer(imageUrl: string) {
    // Replace 'your-java-server-url' with the actual URL of your Java server's endpoint
    return this.httpClient.get('http://localhost:9090/ajes/downloadImage/'+imageUrl, { params: { imageUrl }, responseType: 'arraybuffer' });
  }

  getImage(appointment_id : any): Observable<any> {
    const headers = new HttpHeaders(); // Add any required headers here

    return this.httpClient.get("http://159.89.164.226:5050/qr/qrcode/"+appointment_id, { headers, responseType: 'blob' }).pipe(
      map((response: Blob) => {
        // Process the response if needed (e.g., convert to base64)
        // You can also extract headers from the response using response.headers
        return response;
      })
    );
  }

  uploadPdf(pdfBlob: Blob,visitor_id : any): Observable<any> {
    const formData = new FormData();
    formData.append('pdfFile', pdfBlob, 'pdf_filename.pdf');

    return this.httpClient.post<any>('http://159.89.164.226:5050/ajes/upload-pdf/'+visitor_id, formData);
  }

  downloadPdf(pdfUrl: string): Observable<Blob> {
    return this.httpClient.get("http://159.89.164.226:5050/ajes/downloadImage/"+pdfUrl, { responseType: 'blob' });
  }

  
}
