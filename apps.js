'use strict'
//use strict tells us to follow some baseline 'strict rules'

// variables = storing data as values.

// declaring the variable firstname to be equal to the value of amanda

// let firstName = 'michael'; //string
// let numberOfCats = 2; //number
// let lovesCoffee = true //boolean

let firstName = prompt('Give me your name!');

let message ='';

if (firstName.includes (1)||(2)||(3)||(4)||(5)||(6)||(7)||(8)||(9)||(0)){
    // console.log("I see you have silent numbers in your name, "+ firstName +" tell your father his electric cars suck");
    message = "I see you have silent numbers in your name, "+ firstName +", tell your father his electric cars suck";
}   else if (firstName.includes("m")){
    // console.log("YOUR NAME CONTAINS THE LETTER M!!!! "+ firstName +" THIS ANGERS ME");
    message = ("YOUR NAME CONTAINS THE LETTER M!!!! "+ firstName +" ...THIS ANGERS ME!!!");
}   else{
    // console.log("Congratulations, "+ firstName +" ,on having a name...I have a name too!");
    message = ("Congratulations, "+ firstName +" ,on having a name...I have a name too!");
}

document.write(message);

let result = confirm("Are you sure you want to be here?");
let message2 = result ? 'Nice...' : 'I didn\'t want you here, anyway';

alert(message2)







// // output to the console some value
// console.log('hello, ' + firstName)
// console.log();