function strings4() {
    removeText()
    let input = document.getElementById("string").value;
    let count = 0;
    for (let i = 0; i < input.length - 2; i++) {
        if (input.charAt(i) == input.charAt(i + 1) && input.charAt(i) == input.charAt(i + 2)) {
            count++;
        }
    }
    out(count);
}


function out(input) {
    removeText()
    let div = document.createElement("h3");
    div.setAttribute("id", "line");
    let text = document.createTextNode("Number of triples: " + input);
    div.appendChild(text);
    document.body.appendChild(div);
}

function removeText() {
    if (document.getElementById("line")) {
        let e = document.getElementById("line");
        e.parentNode.removeChild(e);
    }
}