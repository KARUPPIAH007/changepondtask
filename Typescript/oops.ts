 class kar{
    // data-member
    pname:string="karuppiahsaravanan";
    protected pcontact:number =8888;
    paddress:string="siruseri tcs oppsite building";
    psingle:boolean=true;
    private paadhaarNumber:7347733338;

constructor(name:string,contact:number,address:string,single:boolean){
    this.pname = name;
    this.pcontact = contact;
    this.paddress = address;
    this.psingle = single;
}

    // memebre-function
    personDetails(){
        console.log(`Name:${this.pname} contact:${this.pcontact} Address:${this.paddress} Single:${this.psingle}`);
    }
}
    // how to create objectof class
    // let personObj = new kar("prashant",9999,"Goa",true);
    // console.log(personObj.pname);
    // personObj.personDetails();
    
    // let personObj1 = new kar("Vijay",8888,"mumbai",true);
    // personObj1.personDetails();

    // let personObj2 = new kar("Suriya",98799872,"pune",true);
    // personObj2.personDetails();

    export default kar;
