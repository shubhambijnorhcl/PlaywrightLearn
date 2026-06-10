let str = " Hello World!  ";

console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.replace("Hello", "Welcome"));

let msg = "Test: FAIL.Retry:FAIL.";
console.log(msg.replace("FAIL", "PASS"));
console.log(msg.replaceAll("FAIL", "PASS"));

let url = "https://apple.com/iphone";
console.log(url.replace("apple", "samsung"));

let r = "pass,fail,skip".split(",");
console.log(r);

let rr = "test_pass_fail".split("_").join(" ");
console.log(rr);

let ss = ["10", "20", "30"];
let day = ss.join("-");
console.log(day);

console.log((200).toString());