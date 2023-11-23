var Student = /** @class */ (function () {
    function Student(rollNo, studName, marksinEng, marksinMaths, marksinScience) {
        this.rollNo = rollNo;
        this.studName = studName;
        this.marksinEng = marksinEng;
        this.marksinMaths = marksinMaths;
        this.marksinScience = marksinScience;
    }
    Student.prototype.calculatetotalmarks = function () {
        return this.marksinEng + this.marksinMaths + this.marksinScience;
    };
    Student.prototype.calculatepercentage = function () {
        var totalmarks = this.calculatetotalmarks();
        var percentage = (totalmarks / 300) * 100;
        return percentage;
    };
    Student.prototype.displaystudentdetails = function () {
        console.log("Rollno: ".concat(this.rollNo));
        console.log("Studentname: ".concat(this.studName));
        console.log("MarksinEnglish: ".concat(this.marksinEng));
        console.log("MarksinMaths: ".concat(this.marksinMaths));
        console.log("MarksinScience: ".concat(this.marksinScience));
        console.log("Totalmarks: ".concat(this.calculatetotalmarks()));
        console.log("Percentage: ".concat(this.calculatepercentage(), "%"));
    };
    return Student;
}());
var student1 = new Student(69, 'Ram', 98, 99, 95);
student1.displaystudentdetails();
