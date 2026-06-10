const test = function (name1) {
    return "Hellow " + name1;

}
let a = test("value");
console.log(a);


const data = (test) => test;
let value = data("q");
console.log(value);


const ab = (q) => console.log(q);
ab("test");
