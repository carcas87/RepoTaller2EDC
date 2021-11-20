const body = document.querySelector('body');
const btnAgregar = document.querySelector("#btnAgregar")
console.log(btnAgregar)

body.onload = () => {
    btnAgregar.onclick = btnAgregarController
    const productos = getProductos()
    fillTable(productos)
}

function fillFormProductToUpdate(i) {
    const producto = getProductoByIndex(i)
    document.querySelector('#nombre').value = producto.nombre
    document.querySelector('#existencias').value = producto.existencias
    document.querySelector('#precio').value = producto.precio
    document.querySelector('#status').value = producto.status
    btnAgregar.value = "ACTUALIZAR"
    btnAgregar.onclick = (e) => btnActualizarController(e, i)
}

function fillTable(products) {
    const productsTableBody = document.querySelector('#productsTableBody')

    products.forEach((p, i) => {
        /*ICON*/
        const trashIcon = document.createElement('i')
        trashIcon.className = "fas fa-trash"
        const penIcon = document.createElement('i')
        penIcon.className = "fas fa-pen"

        trashIcon.onclick = () => {
            const res = confirm("¿Estas seguro que quieres eliminar?");
            if (res) {
                deleteProducto(i)
                clearTable()
                fillTable(getProductos())
            }
        }

        penIcon.onclick = () => {
            fillFormProductToUpdate(i)
            const res = confirm("¿Estas seguro que quieres actualizar?");
            if(res){
                const res = confirm(" FAVOR DE RELLENAR LOS CAMPOS ");

            }

        }

        /*TABLA*/
        const trProduct = document.createElement('tr')
        const tdUpdate = document.createElement('td')
        const tdDelete = document.createElement('td')
        const tdNombre = document.createElement('td')
        const tdExistencias = document.createElement('td')
        const tdPrecio = document.createElement('td')
        const tdStatus = document.createElement('td')

        tdNombre.textContent = p.nombre
        tdExistencias.textContent = p.existencias
        tdPrecio.textContent = p.precio
        tdStatus.textContent = p.status

        tdUpdate.appendChild(trashIcon)
        tdDelete.appendChild(penIcon)

        trProduct.appendChild(tdUpdate)
        trProduct.appendChild(tdDelete)
        trProduct.appendChild(tdNombre)
        trProduct.appendChild(tdExistencias)
        trProduct.appendChild(tdPrecio)
        trProduct.appendChild(tdStatus)

        productsTableBody.appendChild(trProduct)
    })
}

function clearTable() {
    const productsTableBody = document.querySelector('#productsTableBody')
    productsTableBody.innerHTML = ''
}

function btnAgregarController(e) {
    const nombre = document.querySelector('#nombre').value
    const existencias = document.querySelector('#existencias').value
    const precio = document.querySelector('#precio').value
    const status = document.querySelector('#status').value
    createProducto(nombre, precio, existencias, status)
    alert("Guadado")
    clearTable()
    fillTable(getProductos())
    e.preventDefault();
}

function btnActualizarController(e, i) {
    const nombre = document.querySelector('#nombre').value
    const existencias = document.querySelector('#existencias').value
    const precio = document.querySelector('#precio').value
    const status = document.querySelector('#status').value
    updateProducto(i, nombre, precio, existencias, status)
    alert("Actualizar")
    clearTable()
    fillTable(getProductos())
    btnAgregar.value = "AGREGAR"
    btnAgregar.onclick = btnAgregarController
    e.preventDefault()
}
