//given an input string from the webpage, count out every instance where 3 of the same characters are in a row
function strings4() {
    removeText()
    //get input form page
    let input = document.getElementById("string").value;
    let count = 0;
    //loop through string
    for (let i = 0; i < input.length - 2; i++) {
        //if 3 in a row, increase count
        if (input.charAt(i) == input.charAt(i + 1) && input.charAt(i) == input.charAt(i + 2)) {
            count++;
        }
    }
    //print out count
    out(count);
}

//outputs a single string to the screen inside a div element
function out(input) {
    removeText()
    let div = document.createElement("h3");
    div.setAttribute("id", "line");
    let text = document.createTextNode("Number of triples: " + input);
    div.appendChild(text);
    document.body.appendChild(div);
}

//removes any outputs already on the screen
function removeText() {
    if (document.getElementById("line")) {
        let e = document.getElementById("line");
        e.parentNode.removeChild(e);
    }
}