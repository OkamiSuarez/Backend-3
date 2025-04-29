//Testeando la app con una herramienta llamada artillery 
// simula la conexion de multiples usuarios en una conexion 
// npm i artillery -g

import express from "express";
const app = express()
const PUERTO = 8080

// rutas
    // app.use((req,res)=>{
    //     res.send('Holis')
    // })
app.get("/operacionsimple",(req,res)=>{
    let suma = 0
    for(let i=0; i<10000000; i++){
        suma += i
    }
    res.send({suma})
})
app.get("/operacioncompleja",(req,res)=>{
    let suma = 0
    for(let i=0; i<5e8; i++){
        suma += i
    }
    res.send({suma})
})

// listen
app.listen(PUERTO,()=> console.log(`escuchando en  ${PUERTO}`))

// artillery quick --count 40 --num 50 "http://localhost:8080/operacionsimple" -o simple.json
// artillery quick --count 40 --num 50 "http://localhost:8080/operacioncompleja" -o commpleja.json