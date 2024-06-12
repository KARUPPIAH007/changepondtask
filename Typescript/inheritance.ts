import kar from "./oops";

class company extends kar{
    cname:string;
    gstnumber:number;
    state:string;

    constructor(name:string,contact:number,address:string,single:boolean,compName:string,compGst:number,compstate:string){
        super(name,contact,address,single);

        this.cname =compName;
        this.gstnumber =compGst;
        this.state =compstate;
    }
personDetails(){
    console.log(`Name:${this.pname} contact:${this.pcontact} Address:${this.paddress} Single:${this.psingle}
        CompanyName:${this.cname} Gst Number:${this.gstnumber} State:${this.state}`);
}
}


let companyObj = new company("vinoth",6382387658,"kara",true,"Changepond",67858273737,"chennai");

companyObj.personDetails();
companyObj