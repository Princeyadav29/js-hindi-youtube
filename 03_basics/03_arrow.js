const user = {
    username: "prince",
    price: 99,

    welcomeMessage: function() {
        console.log(`${this.username} , Welcome to website`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "PrinceY"
//     console.log(this.username);
// }

// chai()

// const chai = function() {
//     let username = "PrinceY"
//     console.log(this.username);
// }

const chai = () => {
    let username = "PrinceY"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Prince"})


console.log(addTwo(3, 4));

const myArray = [2, 5, 6, 8, 3]

// myArray.forEach()
console.log(myArray[1]);
