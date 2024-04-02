// singleton

// objects literals

const mySym = Symbol("key1")

const JsUsers = {
    name: "Aakansha",
    "full name" : "ART",
    [mySym] : "myKey1",
    age: 21,
    email: "gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUsers.email);
// console.log(JsUsers["email"]);
// console.log(JsUsers["full name"]);
// console.log(JsUsers[mySym]);

JsUsers.email = "takansha@gmail.com"
// Object.freeze(JsUsers)
JsUsers.email = "dfghjjjjj@gmail.com"
// console.log(JsUsers);

JsUsers.greetings = function(){
    console.log("Hello Users");
}

JsUsers.greetingsTwo = function(){
    console.log(`Hello,${this.name}`);
}

console.log(JsUsers.greetings());
console.log(JsUsers.greetingsTwo());




