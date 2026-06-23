
class TestCase {
    constructor(name, status, priority) {

        this.name = name;
        this.status = status;
        this.priority = priority;
    }

    display() {
        console.log(this.name + "-" + this.priority);

    }
}

let value = new TestCase("Rajat", "Pass", "High");
const value1 = new TestCase("Rahul", "Pass", "High");
value.display();
value1.display();