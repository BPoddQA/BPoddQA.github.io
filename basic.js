"use strict";

//Given a string, count the amount of words in that string.
function basic1(input) {
    let array = input.split(" ");
    return array.length;
}

//Given an array, return the last element in the array.
function basic2(input) {
    return input[input.length - 1];
}

//Given an integer, return “odd” for odd numbers or “even” for even numbers.
function basic3(input) {
    if (input % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

//Given a string containing someones first then last name, return their last and then first name.
function basic4(input) {
    let array = input.split(" ");
    return `${array[1]} ${array[0]}`;
}

//Given a string, return an alphabetically sorted version of the string.
function basic5(input) {
    return input.split("").sort().join("");
}

//Create a function that takes an array of numbers and returns the smallest number in the set
function basic6(input) {
    return input.sort(function (a, b) { return a - b })[0];
}


console.log("OUTPUT FOR BASIC 1:");
console.log(basic1("Just an example here move along"));
console.log(basic1("Dogs are cool"));
console.log(basic1("Shafeeq is here"));
console.log(basic1("QAConsulting"));
console.log("==========");
console.log("OUTPUT FOR BASIC 2:");
console.log(basic2([1, 2, 3]));
console.log(basic2(['cat', 'dog', 'duck']));
console.log(basic2([true, false, true]));
console.log("==========");
console.log("OUTPUT FOR BASIC 3:");
console.log(basic3(3));
console.log(basic3(146));
console.log(basic3(19));
console.log("==========");
console.log("OUTPUT FOR BASIC 4:");
console.log(basic4("Donald Trump"));
console.log(basic4("Rosie O'Donnell"));
console.log(basic4("Seymour Butts"));
console.log("==========");
console.log("OUTPUT FOR BASIC 5:");
console.log(basic5("hello"));
console.log(basic5("edabit"));
console.log(basic5("hacker"));
console.log(basic5("geek"));
console.log(basic5("javascript"));
console.log("==========");
console.log("OUPUT FOR BASIC 6:");
console.log(basic6([34, 15, 88, 2]));
console.log(basic6([34, -345, -1, 100]));
console.log(basic6([-76, 1.345, 1, 0]));
console.log(basic6([0.4356, 0.8795, 0.5435, -0.999]));
console.log(basic6([7, 7, 7]));


