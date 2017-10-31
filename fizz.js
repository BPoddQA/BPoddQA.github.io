function fizzBuzz() {

    let max = document.getElementById("max").value;
    let three = document.getElementById("three").value;
    let five = document.getElementById("five").value;
    for (let i = 1; i <= max; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            out(i + ": " + (three + five));
        } else if (i % 3 == 0) {
            out(i + ": " + (three));
        } else if (i % 5 == 0) {
            out(i + ": " + (five));
        } else {
            out(i);
        }
    }
}

function out(input) {
    let div = document.createElement("div");
    div.setAttribute("id", "line");
    let text = document.createTextNode(input);
    div.appendChild(text);
    let br = document.createElement("br");
    div.appendChild(br);
    document.body.appendChild(div);
}


function removeText() {
    if (document.getElementById("out")) {
        let e = document.getElementById("out");
        e.parentNode.removeChild(e);
    }
}