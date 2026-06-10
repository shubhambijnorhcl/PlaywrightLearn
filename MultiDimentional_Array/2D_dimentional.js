let b = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
]

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(b[i][j]);
    }

    console.log("\n");
}
//If we want to print only rows then we can do like this
for (let i = 0; i < b.length; i++) {
    console.log(`Row ${i + 1}: ${b[i].join(' ')}`);
}

console.log(b.length);

for (let row of b) {
    for (let test of row) {
        process.stdout.write(test + " ");
    }
    console.log();
}

let matrix = [

    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["signup", "pass", 200]
]
//HOw many test cases are executed
console.log(`Total test cases executed: ${matrix.length}`);
console.log("Test case details:" + matrix.length);

//Print the status of each test case    
for (let i = 0; i < matrix.length; i++) {
    console.log("Test Case status for " + matrix[i][0] + "-" + matrix[i][2]);
}

//How many test cases are passed
let passedCount = 0;
for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][1] === "pass") {
        passedCount++;
    }
}
console.log(`Total test cases passed: ${passedCount}`);

let passcountnumber = 0;
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] == "pass") {
            passcountnumber++;
        }
    }


}
console.log(("passcount value is ") + passcountnumber);
let failecount = 0;
for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][1] === "fail") {
        failecount++;
    }



}

console.log(`Total test cases failed: ${failecount}`);

//what is the status code we got for fail
for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][1] === "fail") {
        console.log(matrix[i][1] + ":" + matrix[i][2]);
    }
}