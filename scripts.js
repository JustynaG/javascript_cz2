// Zadanie 9.1 Funkje

function getTriangleArea(a, h) {
		
	
	if (a > 0 && h > 0){
		return a * h / 2;
	
	} 
		console.log("Nieprawidłowe dane");
	
}

console.log( getTriangleArea(10,6) );

var value1 = getTriangleArea(48, 135);
console.log(value1);

var value2 = getTriangleArea(77, 215);
console.log(value2);

var value3 = getTriangleArea(87, -15);
console.log(value3);


// Zadanie 9.2 Tablice

var fameleNames = [ 'Maria', 'Maja', 'Małgosia', 'Magda' , 'Milena'];
var maleNames = [ 'Krzyś', 'Kuba', 'Kacper', 'Konrad', 'Karol']

var allNames = fameleNames.concat(fameleNames, maleNames);
console.log(allNames);

var newName = 'Marian'

	if (allNames.indexOf(newName) === -1){
		console.log(allNames.push('Marian'));
	}




