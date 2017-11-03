//gets data from a json file and given a search term, searches through the data and outputs the matches
function jsonKingSearch() {
    removeText()
    //get search term
    let search = document.getElementById("king").value;
    //retrieve data
    let requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json";
    let request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();
    request.onload = function () {
        let requestData = request.response;
        //loop through data
        for (let i = 0; i < requestData.length; i++) {
            //for each object
            for (let key in requestData[i]) {
                //if data includes search term, print
                if (requestData[i][key].includes(search)) {
                    out(requestData[i])
                    break;
                }
            }
        }
    }
}

//outputs the given objects to the screen
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

//remove all text on screen
function removeText() {
    while (document.getElementById("div")) {
        let e = document.getElementById("div");
        e.parentNode.removeChild(e);
    }
}