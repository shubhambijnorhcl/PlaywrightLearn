let retrycount = 20;
retrycount = retrycount + 1;
console.log(retrycount);

// let retrycount = 30;

//syntaxError//Identifier 'retrycount' has already been declared


let status = "pending";
if (status = "pending") {
    let statuscode = 200;
    console.log(statuscode);
}

//console.log(statuscode)

let value = "abcd";
//console.log(value);
value = "efgh";
//console.log(value);


let test = "a";
test = "b";
{
    let test = "c";
    test = "d";
}
//console.log(test);
