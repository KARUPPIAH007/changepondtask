"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kar = /** @class */ (function () {
    function kar(name, contact, address, single) {
        // data-member
        this.pname = "karuppiahsaravanan";
        this.pcontact = 8888;
        this.paddress = "siruseri tcs oppsite building";
        this.psingle = true;
        this.pname = name;
        this.pcontact = contact;
        this.paddress = address;
        this.psingle = single;
    }
    // memebre-function
    kar.prototype.personDetails = function () {
        console.log("Name:".concat(this.pname, " contact:").concat(this.pcontact, " Address:").concat(this.paddress, " Single:").concat(this.psingle));
    };
    return kar;
}());
// how to create objectof class
// let personObj = new kar("prashant",9999,"Goa",true);
// console.log(personObj.pname);
// personObj.personDetails();
// let personObj1 = new kar("Vijay",8888,"mumbai",true);
// personObj1.personDetails();
// let personObj2 = new kar("Suriya",98799872,"pune",true);
// personObj2.personDetails();
exports.default = kar;
