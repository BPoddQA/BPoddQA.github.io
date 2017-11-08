//Create a function that accepts an array as an argument. Remove all duplicate items
//from the array and return a new array with the filtered array.
function intermediate1(input) {
    let array = input.filter(function (data, index) {
        return input.indexOf(data) == index;
    })
    return array;
}

//Create a function that takes any nonnegative number as an argument and return it
//with its digits in descending order.
function intermediate2(input) {
    input += "";
    return parseInt(input.split("").sort(function (a, b) { return b - a }).join(""));
}

//Create a function that accepts a string and determines if its a valid email address.
//Don’t use regex.
function intermediate3(input) {
    //if no @ symbol
    if(input.indexOf("@") === -1){
        return false;
    }else{
        
    }
}


console.log("OUTPUT FOR ITERMEDIATE 1:");
console.log(intermediate1(["john", "taylor", "john"]));
console.log(intermediate1([1, 0, 1, 0]));
console.log(intermediate1(["The", "big", "cat"]));
console.log("==========");
console.log(intermediate2(123));
console.log(intermediate2(1254859723));
console.log(intermediate2(73065)); 