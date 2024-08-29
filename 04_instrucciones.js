/* const prompt=require('prompt-sync')();

numero1=parseInt(prompt("ingrese el numero 1:"))
numero2=parseInt(prompt("ingrese el valor 2:"));

let numero1=23;
let numero2=3;

console.log(numero1*numero2); */
const prompt = require('prompt-sync')();
let numeros = [];

const datosArreglo = () => {
    const cantidad = parseInt(prompt("¿Cuántos valores deseas ingresar? "));

    for (let i = 0; i < cantidad; i++) {
        const valor = parseInt(prompt(`Ingresa el valor ${i + 1}: `));
        numeros.push(valor);
    }
}

datosArreglo();

console.log("arreglo:");
numeros.forEach((numero, index) => {
    console.log(`${index + 1}. ${numero}`);
});