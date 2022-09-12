let inputNumber;
inputNumber = +prompt('Введите число');
if (typeof inputNumber !== "number" || isNaN(inputNumber)) {
	console.log("Упс, кажется, вы ошиблись")
} else if (inputNumber % 2 === 0) {
	console.log("Число четное")
} else {
	console.log("Число нечетное")
}