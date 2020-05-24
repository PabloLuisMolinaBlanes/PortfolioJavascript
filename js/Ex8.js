function hola() {
var palabra = prompt('Introduzca una palabra');
if (palabra === palabra.toUpperCase()) {
alert('Es una palabra mayuscula');
} else if (palabra === palabra.toLowerCase()) {
alert('Es una palabra minuscula');
} else {
alert('No es una palabra mayuscula ni minuscula');
}
}
