require ("colors");
const {mostrarMenu} = require("./helpers/mensajes");

console.clear();

const main = async()=>{
    console.log("Hello World".green);

    let opt = "";

    do{
        opt = await mostrarMenu();
        console.log({opt});
        await pausa();

    }while(opt !== "0");

    mostrarMenu();
}

main();