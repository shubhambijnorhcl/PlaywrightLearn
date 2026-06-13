let p = new Promise(function (resolve, reject) {
    resolve(55);
})

p.then(function (resolve) {
    console.log("Welcome :", resolve);

})

let r = new Promise(function (resolve, reject) {

    reject("test broken")
})

r.catch(function (failure) {

    console.log("Failure is", failure);


})

let pp = Promise.resolve(10);

pp.then(function (test) {
    return test * 20;
}).then(function (value) {
    console.log("test", value);

})


Promise.resolve("start").
    then(function (val) {
        console.log(val);
        throw new Error("Broke at step 2");

    }).then(function () {
        console.log("this will NOT run");

    }).catch(function (err) {
        console.log("caught:".err.message);

    })
