

function sayMyName(){
console.log("A");
console.log("R");
console.log("T");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
  //  console.log(number1 + number2);
//}
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
    
}

const result = addTwoNumbers(3, 4)
// console.log("Result:", result)

function loginUserMsg(username = "Sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMsg("Art"));
// console.log(loginUserMsg("ASN"));

function calculateCartPrice(val1,val2,...num1){
return num1
}

// console.log(calculateCartPrice(200,300,400,2000))

const user = {
    username: "Aakansha",
    prices: 100000000000
}

function handleObject(anyobj){
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`);

}
// handleObject(user)
handleObject({
    username: "sam",
    price: 366
})

const myNewArray = [200,300,500,800]
function returnSecondValue(getArray){
    return getArray[3]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,1000,900]));