// singleton
// Object.create
// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Prince",
    "full name": "Prince Yadav",
    [mySym]: "mykey1",
    Location: "Delhi",
    age: 20,
    email: "prince@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "prince@gggg.com"
// Object.freeze(JsUser)
JsUser.email = "prince@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
