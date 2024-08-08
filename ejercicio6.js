/* 
let valor = true;

while(valor){
console.log(`menu:1. consultar:2. actualizar:3. salir:4.`);
let opcion = Number(prompt(message:`ingrese la opcion?`));
valor = opcion == 3? false: true;
}
*/

let valor = true;
do{
    console.log(`menu: 1. consultar: 2. actualizar: 3. salir`);
    let opcion = Number(prompt(`ingrese la opcion`));
    valor = opcion == 3? false:true
}while(valor);

