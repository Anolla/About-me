'use strict'

var counter = 0;
var username = prompt("Hello there! what's your name ?")

alert("welcome  " + username);

function fq1() {

var question1 = prompt("Does my name mean grace of God?")

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
        alert("It's a yes or no question, kindly type yes/no or y/n .")
}
}
fq1();

function fq2() {

var question2 = prompt("Do I have siblings?")

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
        alert("It's a yes or no question, kindly type yes/no or y/n .");
}
}
fq2();

function fq3() {
var question3 = prompt("Do you think I love the color 'pink' ?")

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
        alert("It's a yes or no question, kindly type yes/no or y/n .");
}
}
fq3();

function fq4() {
var question4 = prompt("Do you think I'm a quiet person")

switch (question4.toLowerCase()) {
    case 'y':
        // console.log('You are wrong');
        alert("You are wrong!");
        break;
    case 'yes':
        // console.log('You are wrong');
        alert("You are wrong!");
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
        alert("It's a yes or no question, kindly type yes/no or y/n .")
}
}
fq4();

function fq5() {
var question5 = Number( prompt("now that you answered 4 questions about me, can you guess what's my favourite number? 1,4,7,2,9,5 "));

switch (question5) {
    case 7:
        // console.log('You are right');
        alert("You are right");
        counter++;
        break;
    default:
        // console.log('please try again!');
        alert("No you are wrong, it's the odd number 7.");
}
}
fq5();


alert('I hope you enjoyed your time ' + username + "your score is "+ counter);



function fq6() {
var question6 = prompt("How old do you think Iam ?");

for (var i = 0; i < 3; i++) {
    if (question6 == 23) {
        alert('you are right');
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
}
fq6();

function fq7() {
var question7 = prompt("What do you think my favourite color is ? green/purple/dark red/daryellow/orange/navy")
var favouriteColors = ["green", "purple", "darkred", "darkyellow", "orange", "navy"]


for (var c = 0; c <= 5; c++) {
    

     if (question7.toLowerCase() == favouriteColors[c]) {
        alert("Correct!");
        counter++
        break;}
    
    

    else if (c == 5) {
        alert("sorry! You run out of attempts");
    }
    else {
        alert("wrong!");
        question7 = prompt("What do you think my favourite color is ? green/purple/dark red/daryellow/orange/navy");

    }

}
}
fq7();

alert("your score is " + counter);

