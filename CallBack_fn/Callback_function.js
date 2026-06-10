function placeOrder(test, test1) {
    console.log("Placing order for " + test);
    test1();
}
// //First using Ananomous function
// placeOrder("Burger", function () {
//     console.log("Order placed successfully");
// });

//Second way
function test1() {
    console.log("testing");

}

placeOrder("Burger", test1);

//Third way is Arrow function
function placeOrder1(test, test1) {
    console.log("Placing order for " + test);
    test1();
}
placeOrder1("Momos", () => {
    console.log("Arrow Function");
})





function HCL(hr, employee) {

    console.log("We have 10 " + hr);
    employee();


}

HCL("HR", () => {
    console.log("we have 100 employee");
})


