//Destructuring 
//sprit operation 
// //objeto

//formas de estructurar el objeto
/* const persona ={
nombre:null
    edad:null
    sexo:null 
}

persona(direccion)

let nombre, edad, sexo

({nombre,edad,sexo}=persona);
console.log(nombre,sexo); */



//Sprit operation

let {...datos}=persona;


//para cambiar el nomnre de la variable
let{nombre:name}=persona;



//BASE DE DATOS
//-relacionales
//-no relacionales

const persona={
    clave:"123",
    nombre:null,
    edad:null,
    sexo:null,
}
    let nombre,edad;
({nombre, edad,...info}=persona);
