const url = "https://api.coinmarketcap.com/v1/ticker/";
let allData = [];
let gotData = false;

function crypto(output) {
    removeText()
    if (!gotData) {
        let data = Promise.resolve(getData());
        data.then(a => {
            let tbl = document.getElementById("cryptoTable");
            let tblBody = document.getElementById("cryptoData");
            for (let i = 0; i < a.length; i++) {

                allData.push(a[i]);
                if (output) {
                    outTable(a[i], tblBody, false);
                }
            }
            tbl.appendChild(tblBody);
        })
        gotData = true;
    } else {
        console.log("laksdmlaksdml");
        let tbl = document.getElementById("cryptoTable");
        let tblBody = document.getElementById("cryptoData");
        for (let i = 0; i < allData.length; i++) {
            outTable(allData[i], tblBody, false);
        }
        tbl.appendChild(tblBody);
    }
}


async function getData() {
    const response = await fetch(`${url}`);
    const data = await response.json();
    console.log("data retrieved");
    return data;
}

function usd() {
    if (!gotData) {
        crypto(false);
    }
    let amount = parseInt(document.getElementById("amount").value);
    if (amount) {
        
    } else {
        out("invalid data entry");
    }

}



//outputs a single string to the screen inside a div element
function outTable(input, tblBody, calc) {
    let row = document.createElement("tr");
    row.setAttribute("id", "data");

    for (let i = 0; i < 4; i++) {
        let cell = document.createElement("td");
        let temp = "";
        switch (i) {
            case 0:
                temp = "rank";
                break;
            case 1:
                temp = "name";
                break;
            case 2:
                temp = "symbol";
                break;
            case 3:
                temp = "price_usd";
                break;
        }
        let cellText = document.createTextNode(input[temp]);
        cell.appendChild(cellText);
        row.appendChild(cell);
    }
    tblBody.appendChild(row);
}

//outputs a single string to the screen inside a div element
function out(input, name = "test") {
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
    while (document.getElementById("data")) {
        let e = document.getElementById("data");
        e.parentNode.removeChild(e);
    }
    //removes an element with the id 'line' (used in 'out' method)
    if (document.getElementById("line")) {
        let e = document.getElementById("line");
        e.parentNode.removeChild(e);
    }
}




//NOT WORKING
//NOT WORKING
//NOT WORKING
//NOT WORKING
//NOT WORKING
//NOT WORKING
//NOT WORKING
//NOT WORKING
//NOT WORKING
//NOT WORKING
//NOT WORKING