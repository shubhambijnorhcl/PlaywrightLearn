function test(name, callback) {
    console.log("Welcome " + name);

    callback();


}

test("Shubham", function () {
    console.log("How are you");

})


//Callback with parameter
function runtest(testNme, callback) {
    let status = "Pass";
    callback(testNme, status);
}

runtest("Login test", function (name, result) {
    console.log(name + "-" + result);



});