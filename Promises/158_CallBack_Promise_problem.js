//This looks like Asyncronization program to suncronization program
//This also looks of linking of one page to another page


function OpenBrowser() {
    return new Promise(function (resolve) {
        resolve("Open Browser");

    })
}

function gotoLogin() {
    return new Promise(function (resolve) {
        resolve("Open Login page");

    })
}

function gotoCredentialPage() {
    return new Promise(function (resolve) {
        resolve("Open credential page");

    })
}

OpenBrowser().then(function (test) {
    console.log("Browser gets open: ", test);
    return gotoLogin();

}).then(function (test) {
    console.log("Login page opens: ", test);
    return gotoCredentialPage();

}).then(function (test) {
    console.log("Credentail page ", test);

}).catch(function (error) {
    console.log("Error message :", test);

}).finally(function () {
    console.log("Done everything....");

})