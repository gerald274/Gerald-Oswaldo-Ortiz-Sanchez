const perrito = {
    nombre: "gerald",
    edad: 19,
    sexo: "m"
};
console.log(perrito);

// Desestructuración de propiedades
let { nombre, edad, sexo } = perrito;
console.log(nombre, sexo);
