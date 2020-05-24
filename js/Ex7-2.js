function hola() {
var resultado = parseInt(document.getElementById('numero').value) % 23;
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 
'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
var letra = letras[resultado];
document.getElementById('resultado').innerHTML = 'La letra es ' + letra;
}
