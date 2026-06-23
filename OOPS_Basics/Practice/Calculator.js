class Calculator {


    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    add() {

        console.log(this.a + this.b)

    }

    substract() {
        console.log(this.a - this.b);

    }
    multiple() {
        console.log(this.a * this.b);

    }

    divide() {
        console.log(this.a / this.b);

    }


}

let addition1 = new Calculator(10, 20);
addition1.add();
addition1.substract();
addition1.multiple();
addition1.divide();
