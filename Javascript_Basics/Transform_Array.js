let score = [10, 20, 30, 40, 50];
console.log(score);

let grade = score.map(s => s > 30 ? "Pass" : "Fail");
console.log(grade);

let grade1 = score.filter(a => a > 30);
console.log(grade1);

//reduce -accumulate values in an array and return a single value
let total = score.reduce((acc, curr) => acc + curr, 0);
console.log(total);

let nested = [[1, 2], [3, 4]];

console.log(nested.flat());