import { Router } from "express";
const router = Router()
import generarUsuarios from "../utils/utils.js";

router.get("/",(req,res)=>{
    // generando un array de usuarios

    const usuarios = []

    for (let i = 0; i < 100; i++) {
        usuarios.push(generarUsuarios())
        
    }
    res.json(usuarios)
})

export default router