let fruit = ["Banana", "Apple", "Grapes"];
fruit.sort();
console.log(fruit);

let num = [1, 3, 1, 30, 20, 100, 200, 300];
num.sort();
console.log(num);

num.sort((a, b) => a - b);
console.log(num);

num.sort((a, b) => b - a);
console.log(num);

