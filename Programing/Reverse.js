// Reverse a string in JavaScript
// Example: reverseString("hello") -> "olleh"

// function reverseString(str) {
//     return str
//         .split("")    // convert string to array of characters
//         .reverse()      // reverse the array order
//         .join("");    // join the characters back into a string
// }

// // Example usage:
// const original = "hello";
// const reversed = reverseString(original);
// console.log(`Original: ${original}`);
// console.log(`Reversed: ${reversed}`);




const a = "test";
console.log(`Original: ${a}`);
const b = a.split("");
console.log(`reverse:  + ${b}`);

const c = b.reverse().join("");
console.log(c);



