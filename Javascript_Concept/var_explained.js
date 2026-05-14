var a = 10;

console.log(a);

//var is function-scoped, which means it is accessible throughout the entire function in which it is declared. 
// If declared outside of any function, it becomes a global variable. In contrast, let and const are block-scoped, 
// meaning they are only accessible within the block (enclosed by curly braces) in which they are declared.

function printhello() {
    console.log("Hello");

    var a = 20; // This 'a' is different from the global 'a' due to function scope
    console.log(a); // This will print 20

    if (true) {
        var a = 40;
        console.log(a); // This will print 40, demonstrating that 'var' does not have block scope
    }
}

printhello();