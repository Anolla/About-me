'use strict'
function DoAll(){
var counter = 0;
var username = prompt("Hello there! what's your name ?");

alert("welcome  " + username);

var question1 = prompt("Does my name mean grace of God?");

switch (question1.toLowerCase()) {
    case 'y':
        // console.log('You are right');
        alert("You are right, it also means mercy of GOD");
        counter++;
        break;
    case 'yes':
        // console.log('You are right!');
        alert("You are right, it also means mercy of GOD");
        counter++;
        break;
    case 'n':
        // console.log('You are wrong!');
        alert("you are wrong!");
        break;
    case 'no':
        // console.log('You are wrong!');
        alert("you are wrong!");
        break;
    default:
        // console.log('please try again!');
        return alert("It's a yes or no question, kindly type yes/no or y/n .");
}

}
DoAll();
function DoAll2() {
    
var question2 = prompt("Do I have siblings?");

switch (question2.toLowerCase()) {
    case 'y':
        // console.log('You are right');
        alert("You are right, I have a twin brother");
        counter++;
        break;
    case 'yes':
        // console.log('You are right');
        alert("You are right, I have a twin brother");
        counter++;
        break;
    case 'n':
        // console.log('You are wrong!');
        alert("you are wrong!");
        break;
    case 'no':
        // console.log('You are wrong!');
        alert("you are wrong!");
        break;
    default:
        // console.log('please try again!');
        return alert("It's a yes or no question, kindly type yes/no or y/n .");        
}

}
DoAll2();
function DoAll3(){
var question3 = prompt("Do you think I love the color 'pink' ?");

switch (question3.toLowerCase()) {
    case 'y':
        // console.log('You are wrong!');
        alert("You are wrong! I actually hate pink ");
        break;
    case 'yes':
        // console.log('You are wrong');
        alert("You are wrong! I actually hate pink");
        break;
    case 'n':
        // console.log('You are right!');
        alert("you are right!");
        counter++;
        break;
    case 'no':
        // console.log('You are right!');
        alert("you are right!");
        counter++;
        break;
    default:
        // console.log('please try again!');
        return alert("It's a yes or no question, kindly type yes/no or y/n .");
}

}
DoAll3();
function DoAll4() {
    
var question4 = prompt("Do you think I'm a quiet person");

switch (question4.toLowerCase()) {
    case 'y':
        // console.log('You are wrong');
        alert("You are wrong");
        break;
    case 'yes':
        // console.log('You are wrong');
        alert("You are wrong");
        break;
    case 'n':
        // console.log('You are right');
        alert("you are right! Iam only quiet around people I do not know ");
        counter++;
        break;
    case 'no':
        // console.log('You are right!');
        alert("you are right! Iam only quiet around people I do not know");
        counter++;
        break;
    default:
        // console.log('please try again!');
     return  alert("It's a yes or no question, kindly type yes/no or y/n .");
}

}
DoAll4();
function DoAll5(){
var question5 = Number(prompt("Was I born in Amman ?"));

switch (question5.toLowerCase()) {
    case 'y':
        // console.log('You are right');
        alert("You are right");
        counter++;
        break;
    case 'yes':
        // console.log('You are right');
        alert("You are right");
        counter++;
        break;
    case 'n':
        // console.log('You are wrong!');
        alert("you are wrong!");
        break;
    case 'no':
        // console.log('You are wrong!');
        alert("you are wrong!");
        break;
    default:
        // console.log('please try again!');
       return alert("It's a yes or no question, kindly type yes/no or y/n .");

    }
 
}
DoAll5();

alert(' I hope you enjoyed your time ' + username + "your score is "+ counter);



function DoAll6() {
    

var question6 = prompt("How old do you think Iam ?");

for (var i = 0; i < 3; i++) {
    if (question6 == 23) {
        alert('you are right')
        counter++
        break;

    }

    else if (question6 < 23) {
        alert(" come on! I dont't look that young :P ");
        var question6 = prompt("How old do you think Iam ?");
    }


    else {
        alert("you are wrong !!");
        var question6 = prompt("How old do you think Iam ?");

    }
}
DoAll6();

function DoAll7() {
var question7 = prompt("What do you think my favourite color is ? green/purple/dark red/daryellow/orange/navy")
var favouriteColors = ["green", "purple", "darkred", "darkyellow", "orange", "navy"]


for (var c = 0; c <= 5; c++) {
    

     if (question7.toLowerCase() == favouriteColors[c]) {
     alert("Correct!");
        counter++
        break;
    }
    
    

    else if (c == 5) {
        alert("sorry! You run out of attempts");
    }
    else {
        alert("wrong!");
        question7 = prompt("What do you think my favourite color is ? green/purple/dark red/daryellow/orange/navy");

    }

}

alert("your score is " + counter);

}   
} 
DoAll7();