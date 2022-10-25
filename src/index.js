import express from 'express';

//para usar express que es el bootstrap del lado del bakcend
//creo una instancia de express
//tiwene que ser express con miniuscila
const app = express();
//creamos una variable port 
app.set('port', process.env.PORT || 4000);
//usar el puerto
app.listen(app.get('port'), ()=>{
    console.log('estoy en el puerto ' + app.get('port'))
})

console.log('hola mundo');