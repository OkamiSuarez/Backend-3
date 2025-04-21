/* Clase 1
Process
args
commander 
var de entorno
child process */

        // // console.log(process)
        // console.log(process.cwd())
        // // directorio del proceso
        // console.log(process.pid)
        // // id del proceso
        // console.log(process.version)
        // // version de nodejs
        //         // process.exit()  
        // // sale del proceso, lo termina 
        // console.log('texto adicional')

import express from "express";
import UserModel from "./models/usuarios.model.js"
import configObject from "./config/config.js";
import mongoose from "mongoose";

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const {mongo_url} = configObject

mongoose.connect(mongo_url)
    .then(()=> console.log('conexion exitosa'))
    .catch(()=> console.log('Vamos a morir, llueve el fin de semana, aumenta la carne'))

app.get("/",async(req,res)=>{
    try{
        const usuarios = await UserModel.find()
        res.send(usuarios)
    }catch(error){
        res.status(500).send("error terrible, mejor me dedico a otra cosa ",error)
    }
})

const PUERTO = 8080

app.listen(PUERTO,()=>console.log(`Conectado al puerto ${PUERTO}`))