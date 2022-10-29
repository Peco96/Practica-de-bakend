import Producto from "../models/producto";

export const listarProductos = async(req,res) => {
  try {
   
   //budcsr todos producto en la base de datos
    const listarProductos = await Producto.find();
   //codigo 201 es guardado
  res.status(200).json(listarProductos)
}catch(error){

   console.log(error)
   //401 bad request
   res.status(404).json({
    mensaje:'error al intentar buscar un producto'
   })
   }
    
  }
export const crearProducto = async(req,res) => {
    //extraer del body los datos
    
    
    try {
        console.log(req.body);
        //validar esos datos con backend y frontend correspondientes
    
        const productoNuevo = new Producto (req.body);
       //guardar el producto en la base de datos
       await productoNuevo.save();
       //codigo 201 es guardado
      res.status(201).json({
        mensaje: ' el producto fue creado correctamente'
      })
    }catch(error){

       console.log(error)
       //401 bad request
       res.status(400).json({
        mensaje:'erroral intentar agregar un producto'
       })
       }
 }