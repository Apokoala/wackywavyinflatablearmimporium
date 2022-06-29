'use strict'
//use strict tells us to follow some baseline 'strict rules'

// variables = storing data as values.

// declaring the variable firstname to be equal to the value of amanda

// let firstName = 'michael'; //string
// let numberOfCats = 2; //number
// let lovesCoffee = true //boolean

// let firstName = prompt('Give me your name!');

// let message ='';

// if (firstName.includes(Number)) {
//     console.log("I see you have silent numbers in your name, "+ firstName +", tell your father his electric cars suck");
//     // message = "I see you have silent numbers in your name, "+ firstName +", tell your father his electric cars suck";
// }   else if (firstName.includes("m")){
//     console.log("YOUR NAME CONTAINS THE LETTER M!!!! "+ firstName +" THIS ANGERS ME");
//     // message = ("YOUR NAME CONTAINS THE LETTER M!!!! "+ firstName +" ...THIS ANGERS ME!!!");
// }   else{
//     console.log("Congratulations, "+ firstName +" ,on having a name...I have a name too!");
//     // message = ("Congratulations, "+ firstName +" ,on having a name...I have a name too!");
// }

// document.write(message);


// let return1 = prompt('Pick a number!')

// let return2 = prompt('Pick a different number!')

// let sum = wompwomp(return1, return2)
// function GetPicture(){
//     let answer = prompt('pick 1 or 2');
//     let image ='';
//     if(answer ==1){
//         prompt ("you sure")
//     }
// }

// window.setInterval(function wompwomp(){
//     confirm("Are you sure you want to be here?");
    
// }, 9000);

// clearInterval(interval);

// document.write(sum)

// let result = confirm("Are you sure you want to be here?");
// let message2 = result ? 'Nice...' : 'I didn\'t want you here, anyway';

// alert(message2)



// // output to the console some value
// console.log('hello, ' + firstName)
// console.log();

//while loop
//while(some condition is true){
//  do something over and over again
//}
passWord();
function passWord(){
    let userinput = prompt('the Ultimate Question of Life, the Universe, and Everything...');
    while(userinput != 42){
        alert('Not even close, where\'s your towel!?');
        userinput = prompt('the Ultimate Question of Life, the Universe, and Everything...')
    } 
    // userinput = prompt('the Ultimate Question of Life, the Universe, and Everything...');
}

// howmanyGuides();
function howmanyGuides(){
    let output = '';
    let userinput = prompt('Perfect, Now! How many Hitchiker Guides to the Galaxy would you like to have?');
    while(userinput > 5){
        alert('Sorry, we don\'t have that many in stock, Please choose a more reasonable number.');
        userinput = prompt('Perfect, Now! How many Hitchiker Guides to the Galaxy would you like to have?');
    } 
    
    for(let x=0; x < userinput; x++){
        output += "<img class='HHG' src='Hitchhiker.jpg'/>"
    }
    // console.log ('schwing');
    return document.write(output);
}