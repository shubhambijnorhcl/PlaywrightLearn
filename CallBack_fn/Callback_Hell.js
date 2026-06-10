function test1(callback) {
    console.log("Open browser");
    setTimeout(function () {
        callback();
    }, 2000);
}