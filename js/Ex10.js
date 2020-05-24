var num1 = parseInt(prompt("Introduzca el primer numero"));
var num2 = parseInt(prompt("Introduzca otro numero"));
var primero = num1 > num2 ? num1 : num2;
var segundo = num1 > num2 ? num2 : num1; 
var resultado = primero
while (parseInt(primero) !== parseInt(segundo)) {
if (parseInt(num1) === parseInt(num2)) {
break;
}
debugger;
primero = num1 > num2 ? num1 : num2;
segundo = num1 > num2 ? num2 : num1;
resultado = parseInt(primero - segundo);
if (parseInt(num1) > parseInt(num2)) {
num1 = parseInt(resultado);
} else if (parseInt(num2) > parseInt(num1)) {
num2 = parseInt(resultado);
} 
}
alert('El resultado es ' + resultado);
