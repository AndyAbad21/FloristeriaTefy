import { Tarjeta } from "./targeta.js";

const contenedor = document.getElementById("contenedor-ramos");

const ramos = [

    {
        nombre: "Torguta de mar",
        descripcion: "Hermoso tortuga de mar tejida a mano.",
        imagenes: [
            "img/productos/tortuga1-1.png",
            "img/productos/tortuga1-2.png",
            "img/productos/tortuga1-3.png",
            "img/productos/tortuga1-4.png"
        ],
        precio: "25.00"
    },
    {
        nombre: "Ramo de campanas",
        descripcion: "Hermoso ramo de campanas tejido a mano.",
        imagenes: [
            "img/productos/ramo-campanas1-1.png",
        ],
        precio: "25.00"
    },
    {
        nombre: "Abeja de miel",
        descripcion: "Hermoso abeja de miel tejida a mano.",
        imagenes: [
            "img/productos/abeja1-1.png",
        ],
        precio: "25.00"
    },
    {
        nombre: "Ramo de tulipanes",
        descripcion: "Hermoso ramo de tulipanes tejido a mano.",
        imagenes: [
            "img/productos/ramo-tulipanes1.1.png",
        ],
        precio: "25.00"
    },
    {
        nombre: "Pollo con gorrito",
        descripcion: "Hermoso pollo con gorrito tejido a mano.",
        imagenes: [
            "img/productos/pollo1-1.png",
        ],
        precio: "25.00"
    },
];


ramos.forEach(ramo => {

    const tarjeta = new Tarjeta(
        ramo.nombre,
        ramo.descripcion,
        ramo.imagenes,
        ramo.precio
    );

    contenedor.appendChild(tarjeta.crear());

});
