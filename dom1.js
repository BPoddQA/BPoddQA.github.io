//creates a new paragraph element
function createPara() {
    //if the paragprah doesnt already exist
    if (!document.getElementById("pgraph")) {
        //gets input from textbox
        let input = document.getElementById("para").value;
        //create <p> tag
        let para = document.createElement("P");
        para.setAttribute("id", "pgraph");
        //create text node using input 
        let text = document.createTextNode(input);
        para.appendChild(text);
        document.body.appendChild(para);
    }
}

//edits the created paragraph
function editPara() {
    //if the paragraph exists
    if (document.getElementById("pgraph")) {
        let input = document.getElementById("edit").value;
        let edit = document.getElementById("pgraph");
        //change the innerHTML
        edit.innerHTML = input;
    }
}

//if the paragrpah exists, delete it
function deletePara() {
    if (document.getElementById("pgraph")) {
        let e = document.getElementById("pgraph");
        e.parentNode.removeChild(e);
    }
}