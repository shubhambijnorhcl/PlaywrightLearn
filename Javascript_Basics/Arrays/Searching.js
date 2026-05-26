let value = ["chrome", "firefox", "safari", "edge"]; //Create an array of browser names



value.indexOf("safari");
console.log(value.indexOf("safari"));

value.unshift("safari");
console.log(value);
console.log(value.lastIndexOf("safari"));


value.findIndex(x => x === "safari");
console.log(value.findIndex(x => x === "safari"));

value.find(x => x === "safari");
console.log(value.find(x => x === "safaris"));

console.log(value.lastIndexOf("safari"));

console.log(value.findLast(x => x === "safari"));

let num = [1, 2, 3, 4, 5];

console.log(num.find(x => x > 3));
console.log(num.findLast(x => x > 3));