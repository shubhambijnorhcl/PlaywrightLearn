let statuscode = 200;

if (statuscode == 200) {
    console.log("success");
}
else if (statuscode == 404) {
    console.log("page not found");
}
else if (statuscode == 500) {
    console.log("internal server error");
}
else {
    console.log("unknown status code");
}