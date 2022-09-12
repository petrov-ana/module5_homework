let array = [1, 10, 'qwerty', true];
let identical = true;
for (let i in array) {
	if (typeof array[i] != typeof array[0]) {
		identical = false;
	}
}
console.log(identical);