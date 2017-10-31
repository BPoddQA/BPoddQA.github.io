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

function fizzBuzz() {
	let max = document.getElementById("max").value;
	let three = document.getElementById("three").value;
	let five = document.getElementById("five").value;
	for (let i = 1; i <= max; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			console.log(i + ": " + (three + five));
		} else if (i % 3 == 0) {
			console.log(i + ": " + (three));
		} else if (i % 5 == 0) {
			console.log(i + ": " + (five));
		} else {
			console.log(i);
		}
	}
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

function strings4() {
	let input = document.getElementById("string").value;
	let count = 0;
	for (let i = 0; i < input.length - 2; i++) {
		if (input.charAt(i) == input.charAt(i + 1) && input.charAt(i) == input.charAt(i + 2)) {
			count++;
		}
	}
	console.log(count);
}

function createPara() {
	let paraInput = document.getElementById("para").value;
	let para = document.createElement("P");
	para.setAttribute("id", "pgraph");
	let text = document.createTextNode(paraInput);
	para.appendChild(text);
	document.body.appendChild(para);
}

function createPara2(input) {
	let para = document.createElement("P");
	para.setAttribute("id", "pgraph2");
	let text = document.createTextNode(input);
	para.appendChild(text);
	document.body.appendChild(para);
}

function editPara() {
	let paraInput2 = document.getElementById("para2").value;
	let editP = document.getElementById("pgraph");
	editP.innerHTML = paraInput2;
}

function deletePara() {
	let e = document.getElementById("pgraph");
	e.parentNode.removeChild(e);
}

function jsonKingSearch() {
	let search = document.getElementById("king").value;
	let requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json";
	let request = new XMLHttpRequest();
	request.open("GET", requestURL);
	request.responseType = "json";
	request.send();
	request.onload = function () {
		let requestData = request.response;
		for (let i = 0; i < requestData.length; i++) {
			for (let key in requestData[i]) {
				if (requestData[i][key].includes(search)) {
					outputObject(requestData[i])
				}
			}
		}
	}
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



