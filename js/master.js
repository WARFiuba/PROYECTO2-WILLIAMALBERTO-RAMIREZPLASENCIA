let productosHTML = document.querySelector('.productos');

fetch('./datos/productos.json')
.then((respuesta) => {
    return respuesta.json()
})
.then((productos) => {
    productos.forEach(producto => {
        productosHTML.innerHTML += `
        <article class="producto col-12 col-md-6 col-lg-4">
            <a id='${JSON.stringify(producto)}' class="btn btn-outline-danger d-block w-75 h-75 botonDetalle" href='#'>
            <img src="${producto.imagen}" alt="${producto.nombre}" class="h-100 w-100 rounded">
            </a>
        </article>
        `
    })
    let boton = document.querySelectorAll('.botonDetalle')
    let arrayProductos

    let objeto

    let codigo

    boton.forEach(productosSeleccionado => {
        productosSeleccionado.addEventListener('click' , function(e){
            e.preventDefault()

            arrayProductos = [];

            console.log(this.id);
            arrayProductos.push(this.id)
            console.log(arrayProductos);
            objeto = JSON.parse(arrayProductos[0])

            codigo = objeto.codigo

            localStorage.setItem('detallesProducto' , JSON.stringify(arrayProductos))

            location.href = `detalle.html?=${codigo}`
        })
    })
})
.catch((error) => {
    console.log(error);
})
