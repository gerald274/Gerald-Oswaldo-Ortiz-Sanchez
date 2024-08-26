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
let a3=[];

let arregloi2=[[3,4,5,6],[7,8,9]];
a3.push(arregloi2);

const leera3 = () =>{
    a3.forEach((arregloi2, indice) =>{
        console.log(`Datos del arreglo interno ${indice + 1}:`);
        arregloi2.forEach(elemento => {
            console.log(elemento);
        });
    });
};
leera3();

//while
let arre4 = [];

let arregloin4 = [[3, 4, 5, 6], [7, 8, 9]];
arre4.push(arregloin4);

let i = 0;
console.log("");
while (i < arre4[0][0].length) {
    console.log(arre4[0][0][i]);
    i++;
}

i = 0; 
console.log("---");
while (i < arre4[0][1].length) {
    console.log(arre4[0][1][i]);
    i++;
}