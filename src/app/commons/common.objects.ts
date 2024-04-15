export interface Visitor{
    visitor_id : number;
    visitor_name : string;
    visitor_address : string;
    visitor_email : string;
    visitor_phone1: string;
    visitor_phone2: string;
    visitor_photo: string;
    visitor_aadhar: string;
}

export interface Entity{
    entity_id : number;
    entity_description : string;
}

export interface Department{
    department_id : number;
    department_description : string;
    entity : Entity;
}

export interface Section{
    section_id : number;
    section_description : string;
    department :Department;
}

export interface ImageModel{
    id : number,
    name : string,
    type : string
}


export interface Facility{
    facility_id : number;
    facility_description : string;
    facilityCheckIn : string;
    facilityCheckOut : string
}

export interface MenuGroup{
    menu_id : number;
    menuName : string;
    menuGroup : string;
}

export interface Role{
    role_id : number;
    role_description : string;
    // menuGroup : MenuGroup
}

export interface User{
    userId: any;
    user_id : number;
    user_Username : string;
    user_email : string;
    user_phone1 : string;
    user_phone2 : string;
    user_password : string;
    role : Role;
    // section : Section;
}

export interface Contact{
    contactId : number,
    name : string,
    email : string,
    phone : string
}

export interface SectionVisited{
    sectionVisited_id :number;
    section : Section;
    sectionCheckIn : string;
    sectionCheckOut : string;
}

export interface FacilityVisited{
    facilityVisited_id : number;
    facility : Facility;
    facilityCheckIn : string;
    facilityCheckOut : string;
}


export interface Appointment{
    appointment_id : number;
    appointment_start : string;
    appointment_end : string;
    visitor : Visitor;
    vehicle: Vehicle;
    item:Item;
    approver : User;
    facilityVisitedList : FacilityVisited[];
    sectionVisitedList : SectionVisited[];
    appointment_type : string;
    checkInTime : string;
    checkOutTime : string;
}

export interface Vehicle{
    vehicleId : number;
    vehicleNumber : string;
    vehicleType : string;
    driverLicense : string;
    driverName : string;
    driverPhoto : string,
    vehicleCopy : string
    
}

export interface Item{
    item_id : number;
    item_Name : string;
    item_Description : string;
}

export interface Template{
    // id : number;
    appointment : Appointment;
    sectionVisitedList : Section,
    item : Item
}

export interface Company{
    companyId : number,
    name : string,
    logoPath : string,
    address : string,
    address1 : string,
    address2 : string,
    phoneNo : string,
    phoneNo1 : string,
    email : string,
    website : string
}
export interface  CompanyEntity{
    entityId : number,
    entityName : string,
    status : boolean,
}

export interface EmailDetails{
    mailNo : number,
    sender : string,
    recipient : string,
    msgBody : string,
	subject : string,
	attachment : string;
}

export interface Employee{
    employeeId : number,
    employeeName : string
    companyEntity : Entity,
    designation : Designation,
    department : Department,
    section : Section
}

export interface Designation{
    designationId : number,
    designation : string
}


export interface contact{
    contactId : number,
    name : string,
    email: string,
    phoneNumber : string,
    description : string,
}


export interface Career{
    
    careerId : number,
    name : string,
    email : string,
    phoneNumber : string,
    attachFile : string,
}

export interface Login{
    // loginId : number;
    userName : string;
    password : string;

}

export interface Demo{
    demoId : number;
    name : string;
    email : string;
    phoneNumber : string;
    description : string;
}