let inputNumber;
inputNumber = +prompt('¬ведите число');
if (typeof inputNumber !== "number" || isNaN(inputNumber)) {
	console.log("”пс, кажетс€, вы ошиблись")
} else if (inputNumber % 2 === 0) {
	console.log("„исло четное")
} else {
	console.log("„исло нечетное")
}