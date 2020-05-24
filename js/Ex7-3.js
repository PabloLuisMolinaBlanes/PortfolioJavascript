function hola() {
var resultado = parseInt(document.getElementById("numero").value);
var resultado2 = parseInt(document.getElementById("numero2").value);
var area = (resultado * resultado2) / 2
document.getElementById('resultado').innerHTML = 'El area es ' + area;
}
