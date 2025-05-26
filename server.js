
try {
    //intenta acceder a variables del archivo .env
    process.loadEnvFile()
} catch (error) {
    console.warn("archivo .env no encontrado, usando variables predeterminadas")
}

const jsonServer = require("json-server")


//creamos servidor JSON-SERVER
const server = jsonServer.create()

//aqui se añaden configuraciones basicas de un servidor
const middlewares= jsonServer.defaults() //crea configuraciones basicas y úsalas dentro del servidor que creo
server.use(middlewares)

//aqui se alñade todas las rutas basicas de CRUD de la data
const routes = jsonServer.router("db.json") //<<<<-aqui configuramos donde está ubicada base de datos, va a ser archivo JSON que controle servidor.
server.use(routes)

const PORT = process.env.PORT || 5005

server.listen(PORT, () => {
    console.log(`JSON server ejecutandose en el puerto ${PORT}`)
    console.log(`Acceso Local en url http://localhost:${PORT}`)

}) //para que servidor esté activo y escuchando llamadas de otro lugar. Se dan 2 argumentos: puerto y funcion callback 