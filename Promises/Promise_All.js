let checkDB = Promise.resolve("DB Ok");
let checkAPi = Promise.resolve("AP is ok");
let checkURL = Promise.reject("URL is not working");

Promise.all([checkDB, checkAPi, checkURL]).then(function (result) {
    console.log("test");

}).catch(function (error) {
    console.log("error message");

})

Promise.allSettled([
    Promise.resolve("Test A passed"),
    Promise.reject("Test B failed"),
    Promise.resolve("Test A passed")
]).then(function (result) {
    result.forEach(function (a, b) {
        console.log("Test" + (b + 1) + ":", a.status, "-", a.value || a.reason);

    })
})


