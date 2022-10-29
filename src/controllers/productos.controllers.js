export const listarProductos = (req,res) => {
    res.send('aqui tengo que retornat un arreglo de productos')
       }
export const crearProducto = (req,res) => {
    //extraer del body los datos
    console.log(req.body)
    //validar esos datos con backend y frontend correspondientes
    //guardar el producto en la base de datos
        res.send('prueba de peticion post')
       }