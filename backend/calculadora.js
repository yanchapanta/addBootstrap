'use strict'
var params = process.argv.slice(2);
console.log("Ejecutando parametros: "+params);

var numero1 = parseFloat(params[0]);
var numero2 = parseFloat(params[1]);
console.log("Ejecutando número 1: "+numero1);
console.log("Ejecutando número 2: "+numero2);

var plantilla=`
	La suma es: ${numero1+num
		ero2}
	La resta es: ${numero1-numero2}
	La multiplicacioón es: ${numero1*numero2}
	La división es: ${numero1/numero2}
`;
console.log(plantilla);

console.log("Hola mundo con NodeJS");