// use of interface

interface Ikar{
    totalMark();
    percentage();
}

class Students implements Ikar{
    phy:number;
    che:number;
    math:number;
    total:number;

    constructor(p:number,c:number,m:number){
        this.phy = p;
        this.che = c;
        this.math = m;
    }

    totalMark(){
        return this.total = this.phy+this.che+this.math

    }

    percentage() {
        return(this.total/300)*100;
    }

    StudentsResult(){
        console.log(`phy:${this.phy} che:${this.che} math:${this.math} TatolMark:${this.totalMark()}, Percentage:${this.percentage()}`);
    }
}
let stObj = new Students(93,67,89);
stObj.StudentsResult();