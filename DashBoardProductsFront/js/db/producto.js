const productos = [
    new Producto('Sacapunta', 5, 5, 1),
    new Producto('lapicera', 7, 22, 0),
    new Producto('cuaderno', 1, 35, 1),
    new Producto('Crayola', 10, 27, 1),
    new Producto('tijeras', 15, 17, 1),
    new Producto('mochila', 50, 600, 1)
]

function getProductos(){
    return productos
}

function getProductoByIndex(i){
    return productos[i]
}

function deleteProducto(i){
    return productos.splice(i, 1);
}

function updateProducto(i, nombre, precio, existencias, status){
    productos[i].nombre = nombre
    productos[i].precio = precio
    productos[i].existencias = existencias
    productos[i].status = status
}

function createProducto(nombre, precio, existencias, status){
    const newProducto = new Producto(nombre, precio, existencias, status)
    productos.push(newProducto)
}

function getProductoByNombre(nombre){
    let productFinded = {}
    productos.forEach((p)=>{
        if(p.nombre.toUpperCase() === nombre.toUpperCase()) productFinded = p
    })
    return productFinded
}