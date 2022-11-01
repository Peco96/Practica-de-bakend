import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  listarProductos,
  obtenerProducto,
} from "../controllers/productos.controllers";
import { check } from "express-validator";

const router = Router();

router.route("/productos").get(listarProductos).post( [
    check("nombreProducto")
    .notEmpty()
    .withMessage("El nombre del producto es un campo obligatorio")
    .isLength({min:2,max:50})
    .withMessage("el nombre del producto tiene entre 2 y 50 carcteres"),
    check("precio")
    .notEmpty()
    .withMessage("Es un campo obligatorio")
    .isNumeric()
    .withMessage("debe ser un numero")
    .custom((value)=>{
        if (value>=1 && value<=10000){
            return true
        }else{
            throw new Error ("el precio debe estar entre 1 y 10000")
        }
    }),
    check("categoria")
    .notEmpty()
    .isIn(["bebida caliente","bebida fria","salado","dulce"])
    .withMessage("la categoria debbe ser correcta"),

    check("imagen")
    .notEmpty()
.matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
.withMessage("debeenviar un aurl valida ")

] ,crearProducto);

router
  .route("/productos/:id")
  .get(obtenerProducto)
  .put(editarProducto)
  .delete(borrarProducto);

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
