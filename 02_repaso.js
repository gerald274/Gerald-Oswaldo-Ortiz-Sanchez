/*/Realizar un arreglo con dos dimensiones
y guardar dos arreglos internos y dar lectura a los datos
internos*/

let A=[[3,4,5,6],[7,8,9]];

const datosArreglo=()=>{
    A.map((datos)=>{
        datos.map((valores,i)=>{
            console.log(`${i}=${valores}`);
        })
    });
}

//for of
let arreglo2d=[];

let arreglointerno=[[3,4,5,6],[7,8,9]];
arreglo2d.push(arreglointerno);
for (const arreglo of arreglo2d){
    for (const elemento of arreglo){
        console.log(elemento);
    }
}
//for in
let arreglo2di=[];

let arreglointerno1=[[3,4,5,6],[7,8,9]];
arreglo2di.push(arreglointerno1);

console.log("");
for (let indice in arreglo2di[0],[1]) {
    console.log(arreglo2di[0],[1][indice]);

}

//for each
let arreglo2dimensiones=[];

let arreglointerno2=[[3,4,5,6],[7,8,9]];

arreglo2dimensiones.forEach((arreglointerno2, index) => {
    console.log(`Datos ${index + 1}:`);
    arreglointerno2.forEach((elemento) => {
        console.log(elemento);
    });
});
//funcion flecha
//while