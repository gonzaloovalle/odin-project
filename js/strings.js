"use strict"

let string = 'The revolution will not be televised.';
string;

let badString = string;
badString;

let bigmouth = 'I\'ve got no right to take my place...';
bigmouth;

let one = 'Hello, ';
let two = 'how are you?';
let joined = one + two;
joined;

let multiple = one + one + one + one + two;
multiple;

let response = one + 'I am fine — ' + two;
response;

const button = document.querySelector('button');

button.onclick = function() {
    let name = prompt('What is your name?');
    alert('Hello ' + name + ', nice to see you!');
}