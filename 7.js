let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;
let arr = [1, 3, null, 8, 6, 10, 'qwerty', undefined, '2', 2, 7, NaN, 0];
for (let i = 0; i <= arr.length; i++) {
	if (typeof arr[i] == "number" && !isNaN(arr[i])) {
		  arr[i] == 0 ? zeroCount++ : arr[i] % 2 == 0 ? evenCount++ : oddCount++;
	}
}
console.log(`Четных: ${evenCount}, Нечетных: ${oddCount}, Нолей: ${zeroCount}`);