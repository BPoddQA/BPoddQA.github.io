//get the data from the json file
function getData() {
    removeText();
    let requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json";
    let request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();
    request.onload = function () {
        let requestData = request.response;
        dataToScreen(requestData)
    }
}

//loop through data
function dataToScreen(requestData) {
    for (let key in requestData) {
        let data = requestData[key];
        //if the current data item is an array process, else output the data
        if (data.constructor === Array) {
            outputMemberInfo(key, data)
        } else {
            outputSquadInfo(data);
        }
    }
}

//loops through an array and outputs the data
function outputMemberInfo(key, array) {
    //output key
    createMem(key);
    for (let i = 0; i < array.length; i++) {
        //for each object in the array
        let member = array[i];
        for (let memberKey in member) {
            if (memberKey == "name") {
                createH3(member[memberKey]);
            } else {
                createParagraph(memberKey + ": " + member[memberKey]);
            }
        }
    }
}

//output the given data into an <h2> tag
function outputSquadInfo(data) {
    createH2(data);
}

//creates an <h2> tag onto the page
function createH2(input) {
    let para = document.createElement("H2");
    para.setAttribute("id", "H2");
    let text = document.createTextNode(input);
    para.appendChild(text);
    document.body.appendChild(para);
}

//creates an <h2> tag onto the page
function createMem(input) {
    let para = document.createElement("H2");
    para.setAttribute("id", "mem");
    let text = document.createTextNode(input);
    para.appendChild(text);
    document.body.appendChild(para);
}

//creates an <h3> tag onto the page
function createH3(input) {
    let para = document.createElement("H3");
    para.setAttribute("id", "H3");
    let text = document.createTextNode(input);
    para.appendChild(text);
    document.body.appendChild(para);
}

//creates a <p> tag
function createParagraph(input) {
    let para = document.createElement("P");
    para.setAttribute("id", "pgraph");
    let text = document.createTextNode(input);
    para.appendChild(text);
    document.body.appendChild(para);
}

//removes any outputs already on the screen
function removeText() {
    //removes an element with the id 'line' (used in 'out' method)
    while (document.getElementById("H2")) {
        let e = document.getElementById("H2");
        e.parentNode.removeChild(e);
    }
    //removes an element with the id 'mem' (used in 'out' method)
    while (document.getElementById("mem")) {
        let e = document.getElementById("mem");
        e.parentNode.removeChild(e);
    }
    //removes an element with the id 'div' (used in 'outputObject' method)
    while (document.getElementById("H3")) {
        let e = document.getElementById("H3");
        e.parentNode.removeChild(e);
    }
    //removes all elements with the id 'divs' (used in 'outputObjects' method)
    while (document.getElementById("pgraph")) {
        let e = document.getElementById("pgraph");
        e.parentNode.removeChild(e);
    }
}