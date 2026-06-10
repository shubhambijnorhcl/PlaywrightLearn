let value = [10, 20, 30, 40];
console.log(value);


value.push(50, 60);
console.log(value);

value.pop();
console.log(value);

value.unshift(1, 2);
console.log(value);

value.shift();
console.log(value);

value.splice(2, 2);
console.log(value);

value.splice(2, 0, 20, 30);
console.log(value);

value.splice(2, 3, 100);
console.log(value);