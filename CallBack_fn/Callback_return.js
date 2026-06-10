function calculate(a, b, Operation) {
    return Operation(a, b);
}

let sum = calculate(5, 6, function (x, y) {
    return x + y;
});

console.log(sum);
