
// Definición del objeto perrito
const perrito = {
    nombre: null,
    edad: null,
    sexo: null
};

// Asignación de un valor a la propiedad nombre usando la notación de punto
perrito.nombre = "gerald";
console.log(perrito);

// Desestructuración de un arreglo
const datos = [1, "hola", 23];
let [num1, cambrano, num3] = datos;

// Uso del spread operator para crear una copia del objeto perrito
let copiaDatos = { ...perrito };
copiaDatos.nombre = "juan";
console.log(copiaDatos.edad);

// Desestructuración de propiedades del objeto perrito
let { nombre, edad, sexo } = perrito;
console.log(nombre, sexo);

