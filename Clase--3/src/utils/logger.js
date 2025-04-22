// winston popular logger para node js
import { format } from "path";
import winston from "winston";

// const logger = winston.createLogger({
//     // le paso un objeto de configuracion 
//     // aca configuramos dos cosas
//         // transporte y los niveles
//     transports: [
//         new winston.transports.Console({level:"error"}),
//         // agregamos otro transporte
//         new winston.transports.File({
//             filename:"./errors.log",
//             level:'warn'
//         })
//     ]
// })


const niveles = {
    nivel:{
        fatal:0,
        error:1,
        warning:2,
        info:3,
        http:4,
        debug:5
    },
    colores:{
        fatal:"red",
        error:"yellow",
        warning:"blue",
        info:"green",
        http:"magenta",
        debug:"white"
    }
}

const logger = winston.createLogger({
    levels:niveles.nivel,
    transports:[
        new winston.transports.Console({
            level:'http',
            format:winston.format.combine(
                winston.format.colorize({colors:niveles.colores}),
                winston.format.simple()
            )
        }),
        new winston.transports.File({
            filename:"./errors.log",
            level:"warning",
            format:winston.format.simple()
        })
    ]
})


export const addLogger = (req,res,next)=>{
    req.logger = logger;
    req.logger.http(`${req.method} en ${req.url}`)
    next()
}
// export default addLogger