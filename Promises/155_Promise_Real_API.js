let apicall = new Promise(function (resolve, reject) {


    resolve({
        status: 200, body: "User data"

    })
});

apicall.then(function (response) {
    console.log(response.status);


})