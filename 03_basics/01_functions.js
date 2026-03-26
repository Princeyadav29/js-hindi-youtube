

function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("N");
    console.log("C");
    console.log("E");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//    console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2) {

  //  let result = number1 + number2
  //  return result
  return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ",result);


function loginUserMessage (username = "Sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just loggen in`
}

// console.log(loginUserMessage("Prince"));
// console.log(loginUserMessage("Prince"));


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Prince",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);   
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));
