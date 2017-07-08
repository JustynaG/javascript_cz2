// Zadanie 9.1 Funkcje
function getTriangleArea(a, h) {
		
	
	if (a > 0 && h > 0){
		return a * h / 2;
	
	} 
		return "Nieprawidłowe dane";
		
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
		allNames.push('Marian');
		console.log(allNames);
	}


// Zadanie 9.3 Łańcuchy znaków

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCase = dinosaur.toUpperCase();

var textDinosaur = text.replace('Velociraptor', dinosaurUpperCase);

console.log(textDinosaur.length/2);

var halfSentence = textDinosaur.slice(0,72);
console.log(halfSentence);







