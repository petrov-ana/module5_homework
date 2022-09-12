let x = true;
switch (typeof x) {
	case "number":
		console.log(x + " Ч число");
		break;
	case "string":
		console.log(x + " Ч строка");
		break;
	case "boolean":
		console.log(x + " Ч логический тип");
		break;
	default:
		console.log(`“ип ${typeof x} не определен`);
}