const user = {
    username: "Aakansha",
    id: 51,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Nikki"
// user.welcomeMessage()

// console.log(this);


// function coffee(){
//     let username = "aakansha"
//     console.log(this.username);
// }

// coffee()

// const chai = function(){
//     let username = "aakansha"
//     console.log(this.username);
// }

// chai()

// const chaicoffe = () => {
//     let username = "aakansha"
//         console.log(this.username);
// }

// chaicoffe()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(6,5));

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username: "aakansha"})

console.log(addTwo(6,5));

const myArray = [2,3,4,5,6,7]