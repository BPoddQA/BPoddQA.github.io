//if a given input is divisible by three, divide by three
//else, add 1, or -1 to make it divisible
function divideThree() {
    //removeText
    document.getElementById("out").innerHTML = " ";
    let n = parseInt(document.getElementById("n").value);
    let count = 0;
    //until n becomes 1
    while (n != 1) {
        //if disivible by 3, divide by 3
        if (n % 3 == 0) {
            out(`${n} divide by 3`);
            n = n / 3;
            count++;
            //if n - 1 is disivible by 3, subtract 1
        } else if (n % 3 == 1) {
            out(`${n} subtract 1`);
            n = n - 1;
            count++;
        }
        //if n + 1 is disivible by 3, add 1
        else if (n % 3 == 2) {
            out(`${n} add 1`);
            n = n + 1;
            count++;
        }
    }
    out(n)
    out(`number of iterations: ${count}`);
}

//outputs a single string to the screen inside a div element
function out(input) {
    document.getElementById("out").innerHTML += input + "<br>";
}