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

 export const obtenerProducto = async (req,res)=>{
try{
//obtener el parametro
console.log(req.params.id)
//pedirle a la base de datos buscar el documento que coincidsa con el id del parametro
const productoBuscado = await Producto.findById(req.params.id)
//responder con el producto encontrado
res.status(200).json(productoBuscado);

}catch(error){
console.log(error)
res.status(404).json({
  mensaje:"error no pudo encontarr el producto solicitado"
})
}
 }
 export const editarProducto = async (req,res)=>{
  try{
 //buscar el producrto por id y modidificar los datos, con el body
await Producto.findByIdAndUpdate(req.params.id,req.body)
 //responder al front end
 res.status(200).json({
  mensaje: "El producto fue editado correctamente"
 })
  }catch(error){
  console.log(error)
  res.status(404).json({
    mensaje:"error el producto solicitado no fue encontrado"
  })
  }
   }
   export const borrarProducto = async (req,res)=>{
    try{
 //buscar un producto por el id y borrarlo
 await Producto.findByIdAndDelete(req.params.id)
 //responder al front end si oudo borar el producto
 res.status(200).json({
  mesaje:"el producto fue correctamente eliminadio"
 })
    }catch(error){
    console.log(error)
    res.status(404).json({
      mensaje:"error el producto solicitado no fue eliminado"
    })
    }
  }
     