"use strict";

//array to hold all created cars
let cars = [];
//array to hold all cars in the garage
let garage = [];
//fixed cost for each fault
const cost = 30;

//upon loading the page, this function creates 8 cars and adds them to the array of created cars
//and then adds each one to the check in dropdown menu
window.onload = function load() {
    //creating and adding each car to the array
    cars.push({ brand: "Ford", reg: "aa11aaa", faults: 0 });
    cars.push({ brand: "Peugeot", reg: "bb22bbb", faults: 4 });
    cars.push({ brand: "Vauxhall", reg: "cc33ccc", faults: 2 });
    cars.push({ brand: "Lexus", reg: "dd44ddd", faults: 7 });
    cars.push({ brand: "Ford", reg: "ee55eee", faults: 1 });
    cars.push({ brand: "Toyota", reg: "ff66fff", faults: 8 });
    cars.push({ brand: "Jaguar", reg: "gg77ggg", faults: 3 });
    cars.push({ brand: "Nissan", reg: "hh88hhh", faults: 5 });

    //for each car in cars, add it to the check in dropdown menu
    for (let car in cars) {
        addDropDown(cars[car].reg, "selectIn");
    }
}

//creates a new car object and adds it to the array of created cars, given the brand, registration number and the number of faults
function createCar(brand, reg, faults) {
    //if the car doesn't already in the list of created cars
    if (!isCar(reg)) {
        //create car object
        let car = { brand: brand, reg: reg, faults: faults };
        //add this car to the array
        cars.push(car);
        //print out for this car being created
        out(`Created new car => brand: ${brand} reg: ${reg} faults: ${faults}`)
        //adds this car to the check in dropdown menu
        addDropDown(reg, "selectIn");
    } else {
        //if the car is already in the created cars array print message
        out("This car already exists");
    }
}

//this function takes input from the webpage and calls the createCar function with the data
function createCarButton() {
    //get the brand
    let brand = document.getElementById("createBrand").value;
    //get the registration number
    let reg = document.getElementById("createReg").value;
    //get the number of faults and parse as an integer
    let faults = parseInt(document.getElementById("createFaults").value);

    //if all three parameters are valid (string, string, integer)
    //call the createCar function
    if (brand && reg && faults) {
        createCar(brand, reg, faults);
    } else {
        out("One or more inputs are invalid");
    }

}

//this function adds a registration number to a given dropdown list
//where reg = the registration number
//and drop = the id of the dropdown tag
function addDropDown(reg, drop) {
    let select = document.getElementById(drop);
    //if the id of the dropdown is 'selectIn' (for the check in dropdown) and the car is in the list of created cars
    //or, the the id of the dropdown is 'selectOut' (for the check in dropdown) and the car is in the garage
    //then add this reg to the dropdown
    if ((drop === "selectIn" && isCar(reg)) || (drop === "selectOut" && isInGarage(reg))) {
        let option = reg;
        let e = document.createElement("option");
        e.textContent = option;
        e.value = option;
        select.appendChild(e);
    }
}

//this function removes a given registraion number from a given dropdown
//where reg = the registration number
//and drop = the id of the dropdown tag
function removeDropDown(reg, drop) {
    let select = document.getElementById(drop);
    for (let i = 0; i < select.length; i++) {
        if (select.options[i].value === reg) {
            select.remove(i);
        }
    }
}

//given a registration number, return the car object
function getCar(reg) {
    for (let car in cars) {
        if (cars[car].reg === reg) {
            return cars[car];
        }
    }
}

//given a registration number, return true if this registration number is of a car in the list of created cars
function isCar(reg) {
    for (let car in cars) {
        if (cars[car].reg === reg) {
            return true;
        }
    }
    return false;
}

//given a registration number, return true if this registration number is of a car in the garage
function isInGarage(reg) {
    for (let car in garage) {
        if (garage[car].reg === reg) {
            return true;
        }
    }
    return false;
}

//given a registration number, this function adds the car with this registration number to the garage
function checkIn(reg) {
    if (reg) {
        //if the car is not already in the garage
        if (!isInGarage(reg)) {
            //if the car exists
            if (isCar(reg)) {
                //get car onject from list of cars
                let car = getCar(reg);
                //add car to garage
                garage.push(car);
                //output text to screen to say car has successfully checked in
                out(`checked in ${reg} to the garage`);
                //add this registration number to the check out dropdown
                addDropDown(reg, "selectOut");
                //removes this registration number from the check in dropdown
                removeDropDown(reg, "selectIn");
            } else {
                out("car not found, click 'show all cars' to view cars");
            }
        } else {
            out("This car is already in the garage, to view the garage type 'output garage'");
        }
    } else {
        out("Invalid registration number");
    }
}

//this function takes input from the webpage and calls the checkIn function with the data
function checkInButton() {
    let select = document.getElementById("selectIn");
    let index = document.getElementById("selectIn").selectedIndex;
    if (index !== -1) {
        let reg = select.options[index].value;
        if (reg) {
            checkIn(reg);
        }
    }
}

//given a registration number, this function checks a car with this registration number out of the garage
function checkOut(reg) {
    if (reg) {
        //if this car is in the garage
        if (isInGarage(reg)) {
            for (let i = 0; i < garage.length; i++) {
                if (garage[i]["reg"] === reg) {
                    //set number of faults to 0
                    fixCar(reg);
                    //remove car from garage
                    garage.splice(i, 1);
                    //output text to screen to say car has successfully checked out
                    out(`checked out ${reg} from the garage`);
                    //readd registration number to the check in dropdown
                    addDropDown(reg, "selectIn");
                    //remove registration number from the check out dropdown
                    removeDropDown(reg, "selectOut");
                    break;
                }
            }
        } else {
            out("This car is not in the garage, to view the garage type 'output garage'");
        }
    }
}

//this function takes input from the webpage and calls the checkOut function with the data
function checkOutButton() {
    let select = document.getElementById("selectOut");
    let index = document.getElementById("selectOut").selectedIndex;
    if (index !== -1) {
        let reg = select.options[index].value;
        if (reg) {
            checkOut(reg);
        }
    }
}

//set number of faults to 0 for a car given its registration number
function fixCar(reg) {
    if (reg) {
        //if this car is in the garage
        if (isInGarage(reg)) {
            for (let i = 0; i < garage.length; i++) {
                if (garage[i]["reg"] === reg) {
                    garage[i]["faults"] = 0;
                    break;
                }
            }
        }
    }
}

//calculates the repair cost of a car given its registration number
function repairCost(reg) {
    if (reg) {
        //if the car is in the garage
        if (isInGarage(reg)) {
            for (let i = 0; i < garage.length; i++) {
                if (garage[i]["reg"] === reg) {
                    //this cost = number of faults for this car * cost of each repair
                    let thisCost = garage[i]["faults"] * cost;
                    if (thisCost === 0) {
                        out("There are no faults with this car, so there is no repair cost");
                    } else {
                        out(`The cost of repairs for this car is: £${thisCost}`);
                    }
                    break;
                }
            }
        } else {
            out("This car is not in the garage, to view the garage type 'output garage'");
        }
    }
}

//this function takes input from the webpage and calls the repairCost function with the data
function repairCostButton() {
    let select = document.getElementById("selectOut");
    let index = document.getElementById("selectOut").selectedIndex;
    if (index !== -1) {
        let reg = select.options[index].value;
        if (reg) {
            repairCost(reg);
        }
    } else {
        out("There are no cars in the garage");
    }
}

//outputs the cars in the garage to the screen
function outputGarage() {
    //removes any text on the screen
    removeText();
    if (garage.length === 0) {
        out("No cars in garage");
    }
    for (let i = 0; i < garage.length; i++) {
        //outputs all the contents of the garage, to the screen
        outputObjects(garage[i]);
    }
}

//outputs all created cars to the screen
function outputCars() {
    //removes any text on the screen
    removeText();
    if (cars.length === 0) {
        out("No cars");
    }
    for (let i = 0; i < cars.length; i++) {
        //outputs all the cars, to the screen
        outputObjects(cars[i]);
    }
}

//given an object, loop through it and output the contents to the screen inside a div element
function outputObject(input) {
    //remove any text on screen
    removeText()
    //create div element
    let div = document.createElement("div");
    div.setAttribute("id", "div");
    let text;
    //loop through object
    for (let key in input) {
        //create text node with data in object
        text = document.createTextNode(input[key]);
        div.appendChild(text);
        //add a new line for each item
        let br = document.createElement("br");
        div.appendChild(br);
    }
    //add a new line at the end
    let br = document.createElement("br");
    div.appendChild(br);
    //append to body of web page
    document.body.appendChild(div);
}

//behaves the same as 'outputObject'except this function doesn't remove any text which is already on the screen
function outputObjects(input) {
    let div = document.createElement("div");
    div.setAttribute("id", "divs");
    let text;
    for (let key in input) {
        text = document.createTextNode(key + ": " + input[key]);
        div.appendChild(text);
        let br = document.createElement("br");
        div.appendChild(br);
    }
    let br = document.createElement("br");
    div.appendChild(br);
    document.body.appendChild(div);
}

//outputs a single string to the screen inside a div element
function out(input) {
    removeText()
    let div = document.createElement("div");
    div.setAttribute("id", "line");
    let text = document.createTextNode(input);
    div.appendChild(text);
    let br = document.createElement("br");
    div.appendChild(br);
    document.body.appendChild(div);
}

//removes any outputs already on the screen
function removeText() {
    //removes an element with the id 'line' (used in 'out' method)
    if (document.getElementById("line")) {
        let e = document.getElementById("line");
        e.parentNode.removeChild(e);
    }
    //removes an element with the id 'div' (used in 'outputObject' method)
    if (document.getElementById("div")) {
        let e = document.getElementById("div");
        e.parentNode.removeChild(e);
    }
    //removes all elements with the id 'divs' (used in 'outputObjects' method)
    while (document.getElementById("divs")) {
        let e = document.getElementById("divs");
        e.parentNode.removeChild(e);
    }
}

//processes an input string from the 'admin' textbox on the webpage
function admin() {
    //gets input from textbox with id 'admin
    let input = document.getElementById("admin").value;
    if (input) {
        //create an array of the input, with each element split by a space
        let array = input.split(" ");
        //switch on the first element
        switch (array[0]) {
            //the first command is to create a new car
            //format: create car <brand> <registration> <number_of_faults>
            //example input for creating a car: create car Peugeot yk10ykm 3

            //if the first word in the input is create            
            case "create":
                //if the length of the input is greater than 5, print error
                if (array.length != 5) {
                    out("ERROR: to create a car, use the format: create car <brand> <registration> <number_of_faults>");
                } else {
                    //if the second word is not car, print error
                    if (array[1] != "car") {
                        out("ERROR: to create a car, use the format: create car <brand> <registration> <number_of_faults>");
                    } else {
                        //check if the 5th item in the array is a number
                        array[4] = parseInt(array[4]);
                        if (array[4]) {
                            //create the car
                            createCar(array[2], array[3], array[4]);
                        } else {
                            out("Invalid registration number");
                        }
                    }
                }
                break;
            //second command is to output the garage
            //example input: output garage

            //if the first word is 'output'
            case "output":
                //if the input is longer than 2 words, print error
                if (array.length != 2) {
                    out("ERROR: to output the cars in the garage use: output garage");
                } else {
                    //if the second word is garage, output the garage
                    if (array[1] === "garage") {
                        outputGarage();
                    }
                }
                break;
            //third command is to output the cost of a car in the garage
            //format: cost <registration>
            //example cost yk10ykm

            //if the first word is cost
            case "cost":
                //if the input is longer than 2 words, print error
                if (array.length != 2) {
                    out("ERROR: to check the repair cost of a car in the garage use: cost <registration>");
                } else {
                    //call the repair cost method using the second item in the array
                    repairCost(array[1]);
                }
                break;
            //the fourth and fifth commands are to check in, and check out cars to the garage
            //format: check <in/out> <registration>
            //example: check in yk10ykm

            //if the first word is check
            case "check":
                //if the input is longer than 3, print error
                if (array.length != 3) {
                    out("ERROR: to check in/out a car, use the format: check <in/out> <registration> ");
                } else {
                    //if the second word is 'in' check in the car
                    if (array[1] === "in") {
                        checkIn(array[2]);
                        //if the second word is 'out' check out the car
                    } else if (array[1] === "out") {
                        checkOut(array[2]);
                    }
                }
                break;
            //final command is help
            //format: help

            //outputs a how to guide
            case "help":
                let help = [];
                help.push("To create a car ==> 'create car <brand> <registration> <number_of_faults>'");
                help.push("To output the list of cars in the garage ==> 'output garage'");
                help.push("To check a car into the garage ==> 'check in <registration>'");
                help.push("To check a car out of the garage ==> 'check out <registration>'");
                help.push("To check the repair cost of a car in the garage ==> 'cost <registration>'");
                help.push("If the brand contains a space, please use an underscore instead");
                help.push("When entering the registration number, do not include a space");
                outputObject(help);
                break;
            //if none of the other cases match, output error and suggest typing help
            default:
                out("Invalid entry: Try typing 'help' to see available commands")
        }
    }
}