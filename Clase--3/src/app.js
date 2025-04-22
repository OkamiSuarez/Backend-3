import express from "express";
const app = express();
const PUERTO = 8080

import {addLogger} from "./utils/logger.js";

// middleware
app.use(addLogger)

// rutas
app.get("/",(req,res)=>{
    req.logger.error("error fatal, vamos a morir doble")
    req.logger.warn("estoo es un warning, manten la calma")
    res.send('Hola que hace')
})

// ruta para probar los loggers
app.get("/loggertest",(req,res)=>{
    req.logger.error("error fatal")
    req.logger.debug("mensaje de debug")
    req.logger.info("mensaje informativo")
    req.logger.warn('mensaje de warning')

    res.send("test de logger")
})

app.listen(PUERTO, ()=> console.log('escuchando en '+PUERTO))