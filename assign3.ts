class Student
{
    public rollNo: number;
    public studName: string;
    public marksinEng: number;
    public marksinMaths: number;
    public marksinScience: number;
  
    constructor(rollNo: number,studName: string,marksinEng: number,marksinMaths: number,marksinScience: number) 
    {
      this.rollNo = rollNo;
      this.studName = studName;
      this.marksinEng = marksinEng;
      this.marksinMaths = marksinMaths;
      this.marksinScience = marksinScience;
    }
  
    calculatetotalmarks(): number 
    {
      return this.marksinEng + this.marksinMaths + this.marksinScience;
    }
  
    calculatepercentage(): number 
    {
      const totalmarks = this.calculatetotalmarks();
      const percentage = (totalmarks / 300) * 100;
      return percentage;
    }
  
    displaystudentdetails(): void 
    {
      console.log(`Rollno: ${this.rollNo}`);
      console.log(`Studentname: ${this.studName}`);
      console.log(`MarksinEnglish: ${this.marksinEng}`);
      console.log(`MarksinMaths: ${this.marksinMaths}`);
      console.log(`MarksinScience: ${this.marksinScience}`);
      console.log(`Totalmarks: ${this.calculatetotalmarks()}`);
      console.log(`Percentage: ${this.calculatepercentage()}%`);
    }
}
const student1 = new Student(69, 'Ram', 98, 99, 95);  
student1.displaystudentdetails();