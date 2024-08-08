/*
let opcion = "";

while(opcion != "salir"){
    let opcion = prompt(message: `Ingrese una opción \n notas - \n salir`);
    if(opcion == "notas"){
        let nota = Number(prompt(message: `Ingrese la nota de su asignatura`));
        nota > 3? alert(`su nota de ${nota}, es aprobado`):alert(`su nota de ${nota}, No es aprobado`);
    }else if(opcion == "salir"){
        break;
    }else{
        opcion = "salir";
        alert(`opcion invalida...`);
    }
}
*/

let opcion = "";

do {
    opcion = prompt(`Ingrese una opción \n notas - \n salir`);
    
    if(opcion == "notas") {
        let nota = Number(prompt(`Ingrese la nota de su asignatura`));
        nota > 3 ? alert(`Su nota de ${nota}, es aprobado`) : alert(`Su nota de ${nota}, no es aprobado`);
    } else if(opcion == "salir") {
        break;
    } else {
        alert(`Opción inválida...`);
    }
} while (opcion != "salir");