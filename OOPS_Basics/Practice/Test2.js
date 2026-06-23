class Student {

    constructor(age, name) {
        this.age = age;
        this.name = name;
    }

    static test = "Playwrigh-2x";

    static student_static() {
        console.log("Student age is " + this.age);

    }

    print() {
        console.log("Student Age is " + this.age + " : " + "Student Name is " + this.name);

    }
}

const student1 = new Student(20, "Rahul");

const student2 = new Student(20, "Rajat");

const student3 = new Student(25, "Ravi");

const student4 = new Student(32, "Vikas");

const student5 = new Student(39, "Vimal");

const student6 = new Student(41, "OM");

const student7 = new Student(50, "Smith");

const student8 = new Student(33, "Dinesh");

const student9 = new Student(40, "Virat");

const student10 = new Student(28, "Rohit");

student1.print();
student2.print();
student3.print();
student4.print();
student5.print();
student6.print();
student7.print();
student8.print();
student9.print();
student10.print();





