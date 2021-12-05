let masterHr = document.getElementById(`master-hr`);
let masterMin = document.getElementById(`master-min`);
let masterSec = document.getElementById(`master-sec`);
let slaveHr = document.getElementById(`slave-hr`);
let slaveMin = document.getElementById(`slave-min`);
let slaveSec = document.getElementById(`slave-sec`);

let resultTotal = document.querySelector(`.total`);

function calculate() {
	// Master
	let mstHr = parseFloat(masterHr.value) * 3600;
	if (isNaN(mstHr)) mstHr = 0;
	let first = parseFloat(masterMin.value) * 60;
	if (isNaN(first)) first = 0;
	let second = parseFloat(masterSec.value);
	if (isNaN(second)) second = 0;
	let resultMaster = mstHr + first + second;

	let slHr = parseFloat(slaveHr.value) * 3600;
	if (isNaN(slHr)) slHr = 0;
	let third = parseFloat(slaveMin.value) * 60;
	if (isNaN(third)) third = 0;
	let fourth = parseFloat(slaveSec.value);
	if (isNaN(fourth)) fourth = 0;
	let resultSlave = slHr + third + fourth;

	resultTotal.innerHTML = resultSlave - resultMaster;
}
function clipCopy() {
	/* Get the text field */
	var copyText = document.getElementById('total').innerHTML;
	console.log(copyText);

	// /* Copy the text inside the text field */
	navigator.clipboard.writeText(copyText);
}

function reset() {
	masterHr.value = ``;
	masterMin.value = ``;
	masterSec.value = ``;
	slaveHr.value = ``;
	slaveMin.value = ``;
	slaveSec.value = ``;
	resultTotal.innerHTML = 0;
}
