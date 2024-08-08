/* 
let check = false;
let saldoCuenta= 30000;

while(check != true) {
    console.log('Bienvenido, seleccione \n 1. consultar saldo \n 2. retirar');
    let opcion = Number(prompt(message: ingrese la opción:`));

    switch (opcion) {
        case 1: console.log('su saldo es ${saldoCuenta}); break;
        case 2: {et retiro = Number(prompt(message: ingrese el valor a retirar`));
            saldoCuenta-= retiro;
            console.log('su saldo es ${saldoConta}'); break;
        }
        case 3: check=true; break;
    }
}
*/

let check = false;
let saldoCuenta= 30000;

do {
    console.log('Bienvenido, seleccione \n 1. consultar saldo \n 2. retirar \n 3. salir');
    let opcion = Number(prompt('ingrese la opción:'));

    switch (opcion) {
        case 1:
            console.log(`su saldo es ${saldoCuenta}`);
            break;
        case 2:
            let retiro = Number(prompt('ingrese el valor a retirar'));
                if(retiro<= saldoCuenta){
                    saldoCuenta -= retiro;
                    console.log(`su saldo es ${saldoCuenta}`);
                }else{
                    alert(`Valor invalido, su cuenta no tiene la candida solicitada`)
                }
            break;
        case 3:
            check = true;
            break;
        default:
            console.log('Opción no válida');
            break;
    }
} while (!check);