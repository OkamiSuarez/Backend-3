import express from "express";
const app = express()
const PUERTO = 8080
import usuariosRouter from "./routes/usuarios.router.js"
import compression from "express-compression";

// Rutas
app.use('/api/users',usuariosRouter)

// usando la compresion 
app.use(compression({
    brotli:{
        enabled: true,
        zlib:{}
    }
}))
app.get("/",(req,res)=>{
    let string = "hola comision, somos programadores y no sabemos arreglar impresoras"
    for(let i=0; i<5e4; i++){
        string += "hola comision, somos programadores y no sabemos arreglar impresoras"
    }
    res.send(string)
})

// sin compresion se usan 3.4mb
// con compresion son 11.8 kB
// con brotli 353B

app.listen(PUERTO,()=>{
    console.log('escuchando en el '+ PUERTO)
})
