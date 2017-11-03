//given three inputs from text boxes on the webpage, this function loops from
//1 to the given max number
//every third number prints the given 'three' string
//every fifth number prints the given 'five' string
//every third and fifth nnumber prints the given 'three' and 'five' string
function fizzBuzz() {
    //removeText
    document.getElementById("out").innerHTML = " ";
    let max = parseInt(document.getElementById("max").value);
    let three = document.getElementById("three").value;
    let five = document.getElementById("five").value;
    if (max && three && five) {
        for (let i = 1; i <= max; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                let temp = three + five;
                out(`${i}:  ${temp}`);
            } else if (i % 3 == 0) {
                out(`${i}:  ${three}`);
            } else if (i % 5 == 0) {
                out(`${i}:  ${five}`);
            } else {
                out(i);
            }
        }
    } else {
        out("Invalid data entry");
    }
}


//output data to 'out' div
function out(input) {
    document.getElementById("out").innerHTML += input + "<br>";
}
