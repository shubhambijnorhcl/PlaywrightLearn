let a = 10;
let b = ++a;
console.log(a);
console.log(b);

let c = b++;
console.log(c);
console.log(b);

let d = --b;
console.log(d);
console.log(b);

let e = 200;
let f = 300;
let max = e > f ? "e is greater" : "f is greater";
console.log(max);

let g = 250;
let maximum = e > f ? (e > g ? "e is greater" : "g is greater") : "f is greatyer";
console.log(maximum);
