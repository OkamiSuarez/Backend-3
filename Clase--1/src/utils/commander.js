// procesamiento de args
// npm i commander

import { Command } from "commander";

const program = new Command();

// 1. comando 2.descripcion 3.valor por default
program
    .option("-p <port>", "Puerto en el que se inicia el server", 8080)
    .option("--mode <mode>", "modo de trabajo","desarrollo")

program.parse()

console.log("opciones",program.opts())
export default program