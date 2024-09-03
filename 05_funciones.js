//factory function
/* const perro={
    nombre:"dogar",
    apellido:"sanchez",
    edad:23
}
const perro2={
    nombre:"princesa",
    apellido:"sanchez",
    edad:25
} */

function datosPerros(nombre,apellido,edad){
    return{
        nombre,
        apellido,
        edad,
        active:true
    }
}

let perro=datosPerros("dogar","sanchez", 25);
let perro2=datosPerros("princesa","sanchez", 23);
/* console.log(perro,perro2); */
//camel case
const datoUsuario={
    nombre:"gerald",
    edad: 19,
    password:"12345",
    direccion:{
        colonia:"certeza",
        calle:"roberto madrazo",
        numeroext:2005
    },
    sueldo:200.50,
  /*  funcion anonima
  cuando creemos funciones dentro
  del objeto que sean anonimas  */ guardarUsuario:function(){
console.log("Guardar usuario....")
  }

}
//datoUsuario.guardarUsuario();

//add registros y parametros a los objetos definidos
const user={id:1};
user.nombre="gerald";
user.guardarUser=function(){
    console.log("guardando user...")
}
console.log(user);
user.guardarUser();

//objetos definidos
/* y con freeze no se agrega ni se cambia
quedan estaticos los */ /* datos const persona=Object.freeze({id:1,nombre:"gerald"});  */

/* con seal se modifica pero no agrega claves */const persona=Object.seal({id:1,nombre:"gerald"});
persona.id=2;
persona.nombre="leche";
persona.edad=19;

/* console.log(persona) */
//pasar funcion como parametros
function pitbull(nombre){
this._nombre=nombre;
}

function animal(Fn,argumento){
    return new Fn(argumento)
}

let animal1=animal(pitbull,"firulais");
console.log(animal1);