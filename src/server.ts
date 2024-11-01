import express from "express"
import routerUser from "./routers/user";
import routerRole from "./routers/role";
import routerTipo_Dni from "./routers/tipo_dni";
import db from "./config/db"

async function conectDB(){
    try {
        await db.authenticate()
        db.sync()
        console.log('La base de datos se conecto correctamente')
    } catch (error) {
        console.log(error)
        console.log('eeror de conexion en la bd')
    }
}

conectDB()






const server=express();

server.use(express.json())


server.use('/api/user',routerUser)
server.use('/api/role', routerRole)
server.use('/api/tipo_dni', routerTipo_Dni)

export default server