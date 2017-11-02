"use strict";

let cars = [];
let garage = [];
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



function repairCost() {
    let select = document.getElementById("selectOut");
    let index = document.getElementById("selectOut").selectedIndex;
    if (index !== -1) {
        let reg = select.options[index].value;
        if (reg) {
            if (isInGarage(reg)) {
                for (let i = 0; i < garage.length; i++) {
                    for (let key in garage[i]) {
                        if (garage[i][key] === reg) {
                            let thisCost = garage[i]["faults"] * cost;
                            if (thisCost === 0) {
                                out("There are no faults with this car, so there is no repair cost");
                            } else {
                                out("£" + garage[i]["faults"] * cost);
                            }
                            break;
                        }
                    }
                }
            } else {
                out("This car is not in the garage, to view the garage type 'output garage'");
            }
        }
    }
}

function outputGarage() {
    removeText();
    if (garage.length === 0) {
        out("No cars in garage");
    }
    for (let i = 0; i < garage.length; i++) {
        outputObjects(garage[i]);
    }
}

function outputCars() {
    removeText();
    if (cars.length === 0) {
        out("No cars");
    }
    for (let i = 0; i < cars.length; i++) {
        outputObjects(cars[i]);
    }
}

function outputObject(input) {
    removeText()
    let div = document.createElement("div");
    div.setAttribute("id", "div");
    let text;
    for (let key in input) {
        text = document.createTextNode(input[key]);
        div.appendChild(text);
        let br = document.createElement("br");
        div.appendChild(br);
    }
    let br = document.createElement("br");
    div.appendChild(br);
    document.body.appendChild(div);
}

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


function removeText() {
    if (document.getElementById("line")) {
        let e = document.getElementById("line");
        e.parentNode.removeChild(e);
    }
    if (document.getElementById("div")) {
        let e = document.getElementById("div");
        e.parentNode.removeChild(e);
    }
    while (document.getElementById("divs")) {
        let e = document.getElementById("divs");
        e.parentNode.removeChild(e);
    }
    if (document.getElementById("divAdmin")) {
        let e = document.getElementById("divAdmin");
        e.parentNode.removeChild(e);
    }
}



function admin() {
    let input = document.getElementById("admin").value;
    if (input) {
        let array = input.split(" ");
        switch (array[0]) {
            case "create":
                if (array.length != 5) {
                    out("ERROR: to create a car, use the format: create car <brand> <registration> <number_of_faults>");
                } else {
                    if (array[1] != "car") {
                        out("ERROR: to create a car, use the format: create car <brand> <registration> <number_of_faults>");
                    } else {
                        array[4] = parseInt(array[4]);
                        if (array[4]) {
                            createCar(array[2], array[3], array[4]);
                        } else {
                            out("Invalid registration number");
                        }
                    }
                }

                break;
            case "output":
                if (array.length != 2) {
                    out("ERROR: to output the cars in the garage use: output garage");
                } else {
                    if (array[1] === "garage") {
                        outputGarage();
                    }
                }
                break;
            case "check":
                if (array.length != 3) {
                    out("ERROR: to check in/out a car, use the format: check <in/out> <registration> ");
                } else {
                    if (array[1] === "in") {
                        checkIn(array[2]);
                    } else if (array[1] === "out") {
                        checkOut(array[2]);
                    }
                }
                break;
            case "help":
                let help = [];
                help.push("To create a car ==> 'create car <brand> <registration> <number_of_faults>'");
                help.push("To output the list of cars in the garage ==> 'output garage'");
                help.push("To check a car into the garage ==> 'check in <registration>'");
                help.push("To check a car out of the garage ==> 'check out <registration>'");
                outputObject(help);
                break;
            default:
                out("Invalid entry: Try typing 'help' to see available commands")
        }
    }
}