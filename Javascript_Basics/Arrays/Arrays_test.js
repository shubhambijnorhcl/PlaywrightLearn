let value = Array.from("hello world"); //Create an array from a string
console.log(value);

let status = ["pass", "fail", "promoted"];
console.log(status[1]); //fail
console.log(status[2]);
console.log(status[3]);
console.log(status[4]);
console.log(status.at(-2));

//Modify

status[1] = "passed";
console.log(status);
console.log(status[1]);
console.log(status.length);
