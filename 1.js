let inputNumber;
inputNumber = +prompt('������� �����');
if (typeof inputNumber !== "number" || isNaN(inputNumber)) {
	console.log("���, �������, �� ��������")
} else if (inputNumber % 2 === 0) {
	console.log("����� ������")
} else {
	console.log("����� ��������")
}