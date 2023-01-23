class StudentMarks{
    constructor(rol, sub, mks){
        this.rollno=rol
        this.subject=sub
        this.marks=mks
    }
    calcGrade(){
        if(this.marks>80){
            console.log("Grade: A");
        }else if(this.marks<80&&this.marks>60){
            console.log("Grade: B");
        }else if(this.marks<60&&this.marks>35){
            console.log("Grade: C");
        }else{
            console.log("Grade: D");
        }
    }
    display(){
        console.log("rollno: "+this.rollno);
        console.log("Subject: "+this.subject);
        console.log("Marks Scored: "+this.marks);
        this.calcGrade()
        console.log("");
    }
}
let s1=new StudentMarks("S20-402","OOPS",98)
s1.display()
let s2=new StudentMarks("S20-414","FSWD",72)
s2.display()
let s3=new StudentMarks("S20-713","DBMS",55)
s3.display()
let s4=new StudentMarks("S20-738","COOS",33)
s4.display()
