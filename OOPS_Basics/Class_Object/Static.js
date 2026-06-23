class Learn {

    constructor(name, student, age, phoneno) {
        this.name = name;
        this.age = age;
        this.student = student;
        this.phoneno = phoneno;
    }

    static name = "Playwright";

    static display() {
        console.log("*****test*****");

    }

}

const a = new Learn("Rahul", "Bcom", 21, "8979786");

console.log(a.name);

console.log(Learn.name);
Learn.display();
 