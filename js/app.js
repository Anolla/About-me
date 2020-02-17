'use strict'

var username = prompt("Hello there! what's your name ?")

alert("welcome  " + username)

var question1 = prompt("Does my name mean grace of God?")

switch(question1.toLowerCase()) {
    case 'y':
        // console.log('You are right');
        alert("You are right, it also means mercy of GOD")
        break;
    case 'yes' :   
        // console.log('You are right!');
        alert("You are right, it also means mercy of GOD")
        break;
    case 'n':
        // console.log('You are wrong!');
        alert("you are wrong!")
        break;
    case 'no': 
        // console.log('You are wrong!');
        alert("you are wrong!")
        break;
    default:
        // console.log('please try again!');
        alert("It's a yes or no question, kindly type yes/no or y/n .")
}


var question2 = prompt("Do I have siblings?")

switch(question2.toLowerCase()) {
    case 'y':
        // console.log('You are right');
        alert("You are right, I have a twin brother")
        break;
    case 'yes' :   
        // console.log('You are right');
        alert("You are right, I have a twin brother")
        break;
    case 'n':
        // console.log('You are wrong!');
        alert("you are wrong!")
        break;
    case 'no': 
        // console.log('You are wrong!');
        alert("you are wrong!")
        break;
    default:
        // console.log('please try again!');
        alert("It's a yes or no question, kindly type yes/no or y/n .")
}


var question3 = prompt("Do you think I love the color 'pink' ?")

switch(question3.toLowerCase()) {
    case 'y':
        // console.log('You are wrong!');
        alert("You are wrong! I actually hate pink ")
        break;
    case 'yes' :   
        // console.log('You are wrong');
        alert("You are wrong! I actually hate pink")
        break;
    case 'n':
        // console.log('You are right!');
        alert("you are right!")
        break;
    case 'no': 
        // console.log('You are right!');
        alert("you are right!")
        break;
    default:
        // console.log('please try again!');
        alert("It's a yes or no question, kindly type yes/no or y/n .")
}

var question4 = prompt("Do you think I'm a quiet person")

switch(question4.toLowerCase()) {
    case 'y':
        // console.log('You are wrong');
        alert("You are wrong")
        break;
    case 'yes' :   
        // console.log('You are wrong');
        alert("You are wrong")
        break;
    case 'n':
        // console.log('You are right');
        alert("you are right! Iam only quiet around people I do not know ")
        break;
    case 'no': 
        // console.log('You are right!');
        alert("you are right! Iam only quiet around people I do not know")
        break;
    default:
        // console.log('please try again!');
        alert("It's a yes or no question, kindly type yes/no or y/n .")
}


var question5 = prompt("Was I born in Amman ?")

switch(question5.toLowerCase()) {
    case 'y':
        // console.log('You are right');
        alert("You are right")
        break;
    case 'yes' :   
        // console.log('You are right');
        alert("You are right")
        break;
    case 'n':
        // console.log('You are wrong!');
        alert("you are wrong!")
        break;
    case 'no': 
        // console.log('You are wrong!');
        alert("you are wrong!")
        break;
    default:
        // console.log('please try again!');
        alert("It's a yes or no question, kindly type yes/no or y/n .")
}



alert( ' I hope you enjoyed your time '+ username )