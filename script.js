"use strict";

function square(p1) {
	window.alert(p1 ** 2);
}

function sumThree(x, y, z) {
	window.alert(x + y + z);
}

let myObject = { name: "Brad", age: 22, occupation: "IT" };

function showObject() {
	window.alert("name: " + myObject.name + "\n" + "age: " + myObject.age + "\n" + "occupation: " + myObject.occupation);
}

function editObject() {
	myObject.name = "bob";
	myObject.age = 30;
	myObject.occupation = "astronaught";
}
function increaseAge() {
	myObject.age++;
	document.getElementById("age").innerHTML = "age: " + myObject.age;
}

window.onload = function () {
	document.getElementById("age").innerHTML = "age: " + myObject.age;
}


function divideThree() {
	let n = parseInt(document.getElementById("n").value);
	while (n != 1) {
		if (n % 3 == 0) {
			console.log(n + " /3")
			n = n / 3;
		} else if (n % 3 == 1) {
			console.log(n + " -1")
			n = n - 1;
		}
		else if (n % 3 == 2) {
			console.log(n + " +1")
			n = n + 1;
		}
	}
	console.log(n)
}



function createPara2(input) {
	let para = document.createElement("P");
	para.setAttribute("id", "pgraph2");
	let text = document.createTextNode(input);
	para.appendChild(text);
	document.body.appendChild(para);
}





function outputObject(input) {

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



