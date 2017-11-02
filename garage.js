let cars = [];
let garage = [];
const cost = 30;

function createCar(brand, reg, faults) {
    let car = { brand: brand, reg: reg, faults: faults };
    cars.push(car);
    return car;
}

window.onload = function load() {
    //create some cars
    cars.push({ brand: "Ford", reg: "aa11aaa", faults: 0 });
    cars.push({ brand: "Peugeot", reg: "bb22bbb", faults: 4 });
    cars.push({ brand: "Vauxhall", reg: "cc33ccc", faults: 2 });
    cars.push({ brand: "Lexus", reg: "dd44ddd", faults: 7 });
    cars.push({ brand: "Ford", reg: "ee55eee", faults: 1 });
    cars.push({ brand: "Toyota", reg: "ff66fff", faults: 8 });
    cars.push({ brand: "Jaguar", reg: "gg77ggg", faults: 3 });
    cars.push({ brand: "Nissan", reg: "hh88hhh", faults: 5 });
    for (let i = 0; i < cars.length; i++) {
        dropDownCheckIn(cars[i].reg);
    }
}

function dropDownCheckIn(reg) {
    let select = document.getElementById("selectIn");
    for (let i = 0; i < cars.length; i++) {
        if (reg === cars[i].reg) {
            let option = cars[i].reg;
            let e = document.createElement("option");
            e.textContent = option;
            e.value = option;
            select.appendChild(e);
        }
    }
}

function removeDropDownIn(reg) {
    let select = document.getElementById("selectIn");
    for (i = 0; i < select.length; i++) {
        if (select.options[i].value == reg) {
            select.remove(i);
        }
    }
}

function removeDropDownOut(reg) {
    let select = document.getElementById("selectOut");
    for (i = 0; i < select.length; i++) {
        if (select.options[i].value == reg) {
            select.remove(i);
        }
    }
}

function dropDownCheckOut(reg) {
    let select = document.getElementById("selectOut");

    for (let i = 0; i < garage.length; i++) {
        if (reg === garage[i].reg) {
            let option = garage[i].reg;
            let e = document.createElement("option");
            e.textContent = option;
            e.value = option;
            select.appendChild(e);
        }
    }
}

function getCar(reg) {
    for (let i = 0; i < cars.length; i++) {
        for (let key in cars[i]) {
            if (cars[i][key] == reg) {
                return cars[i];
            }
        }
    }
}

function checkIn(reg) {
    if (!isInGarage(reg)) {
        if (reg) {
            let car = getCar(reg);
            if (car) {
                garage.push(car);
                out(`checked in ${reg} to the garage`);
                dropDownCheckOut(reg);
                removeDropDownIn(reg)
            } else {
                out("car not found, click 'show all cars' to view cars");
            }
        }
    } else {
        out("This car is already in the garage, to view the garage type 'output garage'");
    }
}

function checkInButton() {
    let select = document.getElementById("selectIn");
    let index = document.getElementById("selectIn").selectedIndex;
    if (index !== -1) {
        let reg = select.options[index].value;
        if (reg) {
            let car = getCar(reg);
            if (car) {
                garage.push(car);
                out(`checked in ${reg} to the garage`);
                dropDownCheckOut(reg);
                removeDropDownIn(reg);
            } else {
                out("car not found, click 'show all cars' to view cars");
            }
        }
    }
}

function checkOut(reg) {
    if (isInGarage(reg)) {
        if (reg) {
            for (let i = 0; i < garage.length; i++) {
                for (let key in garage[i]) {
                    if (garage[i][key] == reg) {
                        garage.splice(i, 1);
                        dropDownCheckIn(reg);
                        removeDropDownOut(reg);
                        break;
                    }
                }
            }
        }
    } else {
        out("This car is not in the garage, to view the garage type 'output garage'");
    }
}

function checkOutButton() {
    let select = document.getElementById("selectOut");
    let index = document.getElementById("selectOut").selectedIndex;
    if (index !== -1) {
        let reg = select.options[index].value;
        if (reg) {
            for (let i = 0; i < garage.length; i++) {
                for (let key in garage[i]) {
                    if (garage[i][key] == reg) {
                        garage.splice(i, 1);
                        dropDownCheckIn(reg);
                        removeDropDownOut(reg);
                        break;
                    }
                }
            }
        }
    }
}

function isInGarage(reg) {
    for (let i = 0; i < garage.length; i++) {
        for (let key in garage[i]) {
            if (garage[i][key] == reg) {
                return true;
            }
        }
    }
}

function repairCost() {
    let reg = document.getElementById("regRep").value;
    if (reg) {
        for (let i = 0; i < garage.length; i++) {
            for (let key in garage[i]) {
                if (garage[i][key] == reg) {
                    out("£" + garage[i]["faults"] * cost);
                    break;
                }
            }
        }
    }
}

function outputGarage() {
    removeText();
    if (garage.length == 0) {
        out("No cars in garage");
    }
    for (let i = 0; i < garage.length; i++) {
        outputObjects(garage[i]);
    }
}

function outputCars() {
    removeText();
    if (cars.length == 0) {
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
    } if (document.getElementById("div")) {
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
                    out(["ERROR: to create a car, use the format: create car <brand> <registration> <number_of_faults>", "please use an underscore instead of a space"]);
                } else {
                    if (array[1] != "car") {
                        out(["ERROR: to create a car, use the format: create car <brand> <registration> <number_of_faults>", "please use an underscore instead of a space"]);
                    }
                }

                break;
            case "output":
                if (array.length != 2) {
                    out("ERROR: to output the cars in the garage use: output garage");
                } else {
                    if (array[1] == "garage") {
                        outputGarage();
                    }
                }
                break;
            case "check":
                if (array.length != 3) {
                    out(["ERROR: to check in/out a car, use the format: check <in/out> <registration> ", "please use an underscore instead of a space"]);
                } else {
                    if (array[1] == "in") {
                        //block if no cars left to checkIn
                        checkIn(array[2]);
                    } else if (array[1] == "out") {
                        out(`Checked out ${array[2]} from the garage`);
                        //block if no cars left to checkIn
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