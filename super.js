function getData() {
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

function dataToScreen(requestData) {
    for (let key in requestData) {
        let data = requestData[key];
        if (data.constructor === Array) {
            createH2(key + ": ");
            for (let i = 0; i < data.length; i++) {
                for (let key2 in data[i]) {
                    createParagraph(key2 + ": " + data[i][key2]);
                }
            }
        } else {
            outputSquadInfo(key, data);
        }
    }
}

function outputMemberInfo() {
    createH2(key + ": ");
    for (let i = 0; i < data.length; i++) {
        for (let key2 in data[i]) {
            createParagraph(key2 + ": " + data[i][key2]);
        }
    }
}

function outputSquadInfo(key, data) {
    if (key == "squadName") {
        createH2(data);
    } else {
        createH2(data);
    }
}

function createH2(input) {
    let para = document.createElement("H2");
    para.setAttribute("id", "H2");
    let text = document.createTextNode(input);
    para.appendChild(text);
    document.body.appendChild(para);
}

function createH3(input) {
    let para = document.createElement("H3");
    para.setAttribute("id", "H3");
    let text = document.createTextNode(input);
    para.appendChild(text);
    document.body.appendChild(para);
}


function createParagraph(input) {
    let para = document.createElement("P");
    para.setAttribute("id", "pgraph");
    let text = document.createTextNode(input);
    para.appendChild(text);
    document.body.appendChild(para);
}

function removeText() {
    if (document.getElementById("pgraph")) {
        let e = document.getElementById("pgraph");
        e.parentNode.removeChild(e);
    }
}