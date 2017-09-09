// scripts.js
var	a = prompt('Dłguść boku:','10')
	h = prompt('Podaj wysokość:', '12')
	triangleArea = a * h /2
document.getElementById("prompt").innerHTML =
"Pole Twojego Trójkąta wynosi: " + triangleArea;
alert('Twój wynik to ' + triangleArea);
console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
