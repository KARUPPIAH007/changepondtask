"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var oops_1 = require("./oops");
var company = /** @class */ (function (_super) {
    __extends(company, _super);
    function company(name, contact, address, single, compName, compGst, compstate) {
        var _this = _super.call(this, name, contact, address, single) || this;
        _this.cname = compName;
        _this.gstnumber = compGst;
        _this.state = compstate;
        return _this;
    }
    company.prototype.personDetails = function () {
        console.log("Name:".concat(this.pname, " contact:").concat(this.pcontact, " Address:").concat(this.paddress, " Single:").concat(this.psingle, "\n        CompanyName:").concat(this.cname, " Gst Number:").concat(this.gstnumber, " State:").concat(this.state));
    };
    return company;
}(oops_1.default));
var companyObj = new company("vinoth", 6382387658, "kara", true, "Changepond", 67858273737, "chennai");
companyObj.personDetails();
companyObj;
