let apicall = new Promise(function (resolve, reject) {


    reject("500 error");
});

apicall.then(function (response) {
    console.log("Success");


}).catch(function (reject) {

    console.log(reject);

})