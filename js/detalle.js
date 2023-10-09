let codigo = location.search;
console.log(codigo);
let codigoProducto = new URLSearchParams(codigo);
console.log(codigoProducto);
let codigoSeleccionado = codigoProducto.get('codigo');
console.log(codigoSeleccionado);

let datosProducto = document.getElementById('detalle')

let datosJSON = JSON.parse(localStorage.getItem('detallesProducto'))

let arrayDetalle = JSON.parse(datosJSON[0]);

datosProducto.innerHTML += `
            <div class="container">
                <div class=" align-items-center">
                    <div class="text-center">
                        <img src="${arrayDetalle.imagen}" alt="${arrayDetalle.nombre}" class="rounded">
                        <h2>Producto: ${arrayDetalle.nombre}</h2>
                        <h3>Detalles: ${arrayDetalle.descripcion}</h3>
                        <h3>Precio: depende</h3>
                        </div>
                </div>
            </div>
        `

let boton = document.querySelector('.boton');

boton.addEventListener('click', function(){
    localStorage.clear();
})

/*
row
col-12 col-md-6 col-lg-6
 */