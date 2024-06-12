// use of interface
var Students = /** @class */ (function () {
    function Students(p, c, m) {
        this.phy = p;
        this.che = c;
        this.math = m;
    }
    Students.prototype.totalMark = function () {
        return this.total = this.phy + this.che + this.math;
    };
    Students.prototype.percentage = function () {
        return (this.total / 300) * 100;
    };
    Students.prototype.StudentsResult = function () {
        console.log("phy:".concat(this.phy, " che:").concat(this.che, " math:").concat(this.math, " TatolMark:").concat(this.totalMark(), ", Percentage:").concat(this.percentage()));
    };
    return Students;
}());
var stObj = new Students(93, 67, 89);
stObj.StudentsResult();
