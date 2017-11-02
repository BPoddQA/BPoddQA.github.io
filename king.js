function jsonKingSearch() {
    removeText()
    let search = document.getElementById("king").value;
    let requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json";
    let request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();
    request.onload = function () {
        let requestData = request.response;
        for (let i = 0; i < requestData.length; i++) {
            for (let key in requestData[i]) {
                if (requestData[i][key].includes(search)) {
                    out(requestData[i])
                    break;
                }
            }
        }
    }
}


function out(input) {
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

function removeText() {
    while (document.getElementById("div")) {
        let e = document.getElementById("div");
        e.parentNode.removeChild(e);
    }
}