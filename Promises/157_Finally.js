let testrun = new Promise(function (resolve, reject) {
    let result = true;
    if (result) { resolve({ "status": "200" }) }
    else {
        reject("Assertion failed");
    }
}
);

testrun.then(function (data) {
    console.log("success");
}).catch(function (error) {
    console.log("error");

}).finally(function () {
    console.log("tesst function");

})



let APIcall = new Promise(function (resolve, reject) {

    let value = "true";

    if (value) {
        resolve({
            status: "200",
            result: "pass"
        })
    } else {
        reject({
            status: 401,
            result: "error"
        })
    }


})

APIcall.then(function (data) {
    console.log("API pass with success result");
}).catch(function (error) {
    console.log("error message");

}).finally(function () {
    console.log("Finally call....");

})



