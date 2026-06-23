getvalue();

function getvalue() {
    console.log(value);
    var value = "abc";
    console.log(value);
}



test();

function test() {
    console.log("testing");

}



function outer() {
    let message = "hello";
    console.log("Outer CALLED!");
    function inner() {
        console.log(message);
    }
    return inner;
}


