// scripts.js
var a = prompt('Wartość A:', '6');
var	b = prompt('Wartość B:', '7');
var	value = (a * a) + (2 * a * b) - (b * b);
console.log('Wynik działania ' + a + ' and ' + b + ' is equal to ' + value);

if (value > 0) {
	alert('Liczba jest dodatnia');
	console.log('Liczba jest większa niż 0');
} else if (value < 0) {
	alert('Liczba jest ujemna');
	console.log('Liczba jest mniejsza niz 0');
} else {
	alert('Liczba równa się 0');
	console.log('Wynik równa się 0');
}
document.getElementById("prompt").innerHTML = 'Twój wynik to:' + value;