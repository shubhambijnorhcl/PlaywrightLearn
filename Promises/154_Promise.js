let order = new Promise(function (resolve, reject) {
    let foodready = true;
    if (foodready) {
        resolve("testing");
    } else {
        reject("reject value");
    }
})

console.log(order);

let order1 = new Promise(function (resolve, reject) {

    resolve({
        company: "Zomato",
        Status: 200


    })
})

order1.then(function (test) {
    console.log(test.company);

})

