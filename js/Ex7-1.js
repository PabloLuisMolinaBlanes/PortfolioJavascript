function hola() {
var resultado = parseInt(document.getElementById("numero").value);
if (resultado % 2 === 0) {
document.getElementById('resultado').innerHTML = 'El numero es par';
} else if (resultado % 2 !== 0) {
document.getElementById('resultado').innerHTML = 'El numero no es par';
}
}
