const { resolve } = require("path");

require("colors");

const mostrarMenu = () => {
    console.clear();
    console.log("==========================".green);
    console.log("  Seleccione una opción".green);
    console.log("==========================\n".green);

    console.log(`${"1.".green} Crear tarea`);
    console.log(`${"2.".green} Lstar tarea`);
    console.log(`${"3.".green} Lstar tareas completadas`);
    console.log(`${"4.".green} Lstar tareas pendientes`);
    console.log(`${"5.".green} Cmpletar tarea(s)`);
    console.log(`${"6.".green} Brrar tarea`);
    console.log(`${"0.".green} Salir\n`);

    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Seleccione una opción: ", (opt) => {
        readline.close();
        resolve(opt);
    })
}


const pausa = () => {

    return new Promise(resolve => {
    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question(`\nPresione ${"ENTER".green} para continuar\n`, (opt) => {
        readline.close();
        resolve();
    })}
    )
}

module.exports = {
    mostrarMenu
}