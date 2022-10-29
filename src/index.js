import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import "./database";
//para usar express que es el bootstrap del lado del bakcend
//creo una instancia de express
//tiwene que ser express con miniuscila
const app = express();
//creamos una variable port 
app.set('port', process.env.PORT || 4001);
//usar el puerto
app.listen(app.get('port'), ()=>{
    console.log('estoy en el puerto ' + app.get('port'))
})

console.log('hola mundo');

//middlewares: funciones que se ejecutan antes de las rutas
// morgan da informascion extra enl a terminal
 app.use(morgan('dev'));
 //tenemos que permitir peticiones remotas
 app.use(cors())
 //agregart middlewares para poder ejecutar json
 app.use(express.json())
 app.use(express.urlencoded({extended:true}))
//cargar un archivo estático
app.use(express.static(path.join(__dirname, '../public')))
console.log()

//rutas:nombre de dominio + ---

app.get('/productos', (req, res)=>{
 res.send('esto es una prueba de la peticion get')
})