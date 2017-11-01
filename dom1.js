function createPara() {
    if (!document.getElementById("pgraph")) {
        let input = document.getElementById("para").value;
        let para = document.createElement("P");
        para.setAttribute("id", "pgraph");
        let text = document.createTextNode(input);
        para.appendChild(text);
        document.body.appendChild(para);
    }
}

function editPara() {
    if (document.getElementById("pgraph")) {
        let input = document.getElementById("edit").value;
        let edit = document.getElementById("pgraph");
        edit.innerHTML = input;
    }
}

function deletePara() {
    if (document.getElementById("pgraph")) {
        let e = document.getElementById("pgraph");
        e.parentNode.removeChild(e);
    }
}