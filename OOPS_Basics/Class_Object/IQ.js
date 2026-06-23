class Browser {

    constructor(name) {
        this.name = name;
        this.isOpen = true;
        console.log(name + " is Launched");

    }

    startBrowser() {
        console.log("Started Browser");

    }
    closeBrowser() {
        console.log("Closed Browser");
    }
}

function test1() {
    console.log("test  with in the function");

}

let chrome = new Browser("Chrome");
let firefox = new Browser("Firefox");
test1();

chrome.startBrowser();

