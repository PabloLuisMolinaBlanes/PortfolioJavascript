var num1 = parseInt(prompt("Introduzca el primer numero"));
var num2 = parseInt(prompt("Introduzca otro numero"));
var primero = num1 > num2 ? num1 : num2;
var segundo = num1 > num2 ? num2 : num1; 
var resultado = parseInt(primero - segundo);
while (parseInt(primero) !== parseInt(segundo)) {
if (parseInt(num1) > parseInt(num2)) {
num1 = parseInt(resultado);
} else if (parseInt(num2) > parseInt(num1)) {
num2 = parseInt(resultado);
}
if (parseInt(num1) === parseInt(num2)) {
break;
}
primero = num1 > num2 ? num1 : num2;
segundo = num1 > num2 ? num2 : num1;
resultado = parseInt(primero - segundo); 
}
alert('El resultado es ' + num1/num2);
