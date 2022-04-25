let productosCactus = document.getElementById('main-cactus');
let ventanaCarrito = document.getElementById('carritoDiv');
let ventanaCarrito1 = document.getElementById('carritoDiv1');
let clicBoton = document.getElementById('ventanaCarrito');
let contenedorCarrito = document.getElementById('contenedorCarrito');
let contadorCarrito = document.getElementById('count-cart');
let precioTotal = document.getElementById('precioTotal');

let carrito = [];

stockCactus.forEach((cactus) => {
    let cardsC = document.createElement('div');
    cardsC.classList.add('cactus');
    cardsC.innerHTML = `
    <img src=${cactus.img} alt="">
    <div class="descript-card">
    <p class="precio-producto">$${cactus.precio}</p>
    <h3>${cactus.nombre}</h3>
    <span class="disponibles">Stock: ${cactus.inventario}</span>
    <span class="categoria">${cactus.categoria}</span>
    <div class="boton-carrito">
    <button id="Agregar${cactus.id}" class="boton-agregar"> Añadir al carrito </button></div>
    </div>
    `
    productosCactus.appendChild(cardsC)


    let boton = document.getElementById(`Agregar${cactus.id}`)

    boton.addEventListener('click', () => {

        addCart(cactus.id)
    })

});


let addCart = (prodId) => {

    let existe = carrito.some(prod => prod.id === prodId)

    if (existe) {

        let prod = carrito.map(prod => {

            if (prod.id === prodId) {
                prod.cantidad++
            }
        })
    } else {

        let item = stockCactus.find((prod) => prod.id === prodId)
        carrito.push(item)

    }


    actualizarCarrito()
}


let eliminarDelCarrito = (prodId) => {

    let item = carrito.find((prod) => prod.id === prodId, 0)
    let indice = carrito.indexOf(item)
    carrito.splice(indice, 1)

    actualizarCarrito()

}

clic = 0;

function mover() {
    if (clic === 0) {

        clicBoton.style.left = "0";
        clicBoton.style.transition = "all 300ms linear"

        clic = clic + 1;

    } else {

        clicBoton.style.left = "100%";
        clicBoton.style.transition = "all 300ms linear"

        clic = 0;

    }
}

ventanaCarrito.addEventListener('click', mover, true);
ventanaCarrito1.addEventListener('click', mover, true);

let actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "";

    carrito.forEach((prod) => {

        let div = document.createElement('div');
        div.className = ('productoEnCarrito');
        div.innerHTML = `
      
        <div class="img-cart"><img src="${prod.img}"> </img></div>
        <div class="nombre-cart">${prod.nombre}</div>
        <div class="cantidad-cart">${prod.cantidad}</div>
        <div class="precio-cart">$${prod.precio}</div>
        <button onclick ="eliminarDelCarrito(${prod.id})" class="eliminar-del-carrito"> <img src="/assets/icons/trash.svg" alt=""></button></button>
    
        `

        console.log(contadorCarrito);
        contenedorCarrito.appendChild(div)
        carritoVacio()

    })

    contadorCarrito.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);

    precioTotal.innerText = "$" + carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)



}

let carritoVacio = () => {
    carritoVacio.innerHTML = "";

    if (Object.keys(carrito).length === 0) {
        carritoVacio.innerHTML = `
        <div class="carritoVsacio">
            <img src="/assets/images/empty-cart.png" alt="">

            <h2>Su carrito esta vacio</h2>
            <br>
            <p>Añada productos a su carrito para poder realizar una compra</p>
        </div>
        `
        return
    }

}
