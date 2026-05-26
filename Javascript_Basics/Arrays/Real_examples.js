let value = ["chrome", "firefox", "safari", "edge"]; //Create an array of browser names
console.log(value.length);
console.log(value);

value.splice(2, 1);
console.log(value);

value.push("safari");
console.log(value);

value.unshift("opera");
console.log(value);


for (let i = 0; i < value.length; i++) {

    console.log(value[i]);

    if (value[i] === 'edge') {
        console.log("test");
    } else {
        console.log("test2");
    }

}
