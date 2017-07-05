function getTriangleArea(a, h) {
		
	
	if ((a, h) > 0){
		
	} else {
		console.log("Nieprawidłowe dane");
	}

	return a * h / 2;
}

console.log( getTriangleArea(10,6) );

var triangle1Area = getTriangleArea(48, 135);
console.log(triangle1Area);

var triangle1Area = getTriangleArea(77, 215);
console.log(triangle1Area);

var triangle1Area = getTriangleArea(87, -15);
console.log(triangle1Area);


// Zadanie 9.2 Tablice

var fameleNames = [ 'Maria', 'Maja', 'Małgosia', 'Magda' , 'Milena'];
var maleNames = [ 'Krzyś', 'Kuba', 'Kacper', 'Konrad', 'Karol']

var allNames = fameleNames.concat(fameleNames, maleNames);
console.log(allNames);

var newName = 'Marian'

	if (allNames.indexOf(newName) === -1){
		var x = allNames.push('Marian');
	}




