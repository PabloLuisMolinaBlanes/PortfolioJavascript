function hola() {
var num = prompt('Introduzca un numero de DNI');
var resultado = num % 23;
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 
'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
var letra = letras[resultado];
alert('La letra es ' + letra);
}
