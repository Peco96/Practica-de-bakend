import { Router } from "express";
import {
  crearProducto,
  listarProductos,
  obtenerProducto,
} from "../controllers/productos.controllers";

const router = Router();

router.route("/productos").get(listarProductos).post(crearProducto);

router.route("/productos/:id")
.get(obtenerProducto)
//.put
//.delete()

export default router;
//rutas:nombre de dominio + ---
//no puedo hacer dos peticiones get en la misma ruta!!
// app.get('/productos', (req, res)=>{
//     res.send('aqui tengo que retornat un arreglo de productos')
//    })
//    app.post('/producto2', (req, res)=>{
//        res.send('aqui devilvemos un producto')
//       })
//    //pero si puedo hacer distintas peticiones (post get y delete) a la misma ruta
//    app.post('/productos', (req, res)=>{
//        res.send('esto es una prueba de la peticion post')
//       })
