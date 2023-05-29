var previousContent = "";

function script1() {
	previousContent = document.body.innerHTML;
	document.body.innerHTML = "";
	var arr = { un: 1, deux: 2, trois: 3 };
	for (var key in arr) {
		var value = arr[key];
		document.write(key + " = " + value + "<br>");
	}
	document.write('<button onclick="goBack()">Go Back</button>');
}

function script2() {
	previousContent = document.body.innerHTML;
	document.body.innerHTML = "";
	var arr = [20, 82, 46, 100];
	for (var i in arr) {
		document.write(i + "<br>");
	}
	document.write("---------------------- <br>");
	for (var i of arr) {
		document.write(i + "<br>");
	}
	document.write('<button onclick="goBack()">Go Back</button>');
}

async function* Generator() {
	var i = 0;
	while (i < 3) {
		yield i++;
	}
}

async function script3() {
	previousContent = document.body.innerHTML;
	document.body.innerHTML = "";
	for await (var j of Generator()) {
		document.write(j + "<br>");
	}
	document.write('<button onclick="goBack()">Go Back</button>');
}

function displayArrayElements() {
	previousContent = document.body.innerHTML;
	document.body.innerHTML = "";
	var arr = ["Un", "Deux", "Trois", "Quatre"];
	for (var i = 0; i < arr.length; i++) {
		document.write(arr[i] + "<br>");
	}
	document.write('<button onclick="goBack()">Go Back</button>');
}

function calculateSum() {
	previousContent = document.body.innerHTML;
	document.body.innerHTML = "";
	var arr = [60, 39, 10, 6, 33];
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	document.write("Sum: " + sum);
	document.write('<button onclick="goBack()">Go Back</button>');
}

function goBack() {
	document.body.innerHTML = previousContent;
}
