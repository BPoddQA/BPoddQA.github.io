function divideThree() {
    removeText();
    let n = parseInt(document.getElementById("n").value);
    let count = 0;
    while (n != 1) {
        if (n % 3 == 0) {
            out(n + " divide by 3")
            n = n / 3;
            count++;
        } else if (n % 3 == 1) {
            out(n + " subtract 1")
            n = n - 1;
            count++;
        }
        else if (n % 3 == 2) {
            out(n + " add 1")
            n = n + 1;
            count++;
        }
    }
    out(n)
    out("number of iterations: " + count);
}


function out(input) {

    let div = document.createElement("h3");
    div.setAttribute("id", "line");
    let text = document.createTextNode(input);
    div.appendChild(text);
    document.body.appendChild(div);
}

function removeText() {
    if (document.getElementById("line")) {
        let e = document.getElementById("line");
        e.parentNode.removeChild(e);
    }
}