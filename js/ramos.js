import { Tarjeta } from "./targeta.js";

const contenedor = document.getElementById("contenedor-ramos");

const ramos = [

    {
        nombre: "Llavero de tortugita",

        descripcion: "Hermoso llavero de tortugita tejido a mano.",

        imagenes: [
            "img/productos/tortuga1-1.png",
            "img/productos/tortuga1-2.png",
            "img/productos/tortuga1-3.png",
            "img/productos/tortuga1-4.png"
        ],

        precio: "2.50",

        cantidad: "🐢 1 pieza",

        caracteristica: "🧶 Tejido artesanal",

        disponible: true,

        detalles: {
            material: "Lana de algodón",
            tamaño: "6x6 cm aproximadamente",
            colores: "Varios colores"
        }
    },

    {
        nombre: "Ramo de campanitas magicas",

        descripcion: "Hermoso ramo de campananitas tejido a mano con luces para un efecto mágico.",

        imagenes: [
            "img/productos/ramo-campanas1-1.png"
        ],

        precio: "5.00",

        cantidad: "💐 3 campanas",

        caracteristica: "💡 Campanas con luces",

        disponible: true,

        detalles: {
            material: "Lana de algodón",
            tamaño: "40x20 cm aproximadamente",
            colores: "Varios colores"
        }
    },

    {
        nombre: "Llavero de abejita",

        descripcion: "Hermoso llavero de abejita tejido a mano.",

        imagenes: [
            "img/productos/abeja1-1.png"
        ],

        precio: "2.00",

        cantidad: "🐝 1 pieza",

        caracteristica: "🧶 Detalle artesanal",

        disponible: true,

        detalles: {
            material: "Lana de algodón",
            tamaño: "5x6 cm aproximadamente",
            colores: "Amarillo y negro"
        }
    },

    {
        nombre: "Ramo de tulipanes con abejita",

        descripcion: "Hermoso ramo de tulipanes con su abejita tejido a mano.",

        imagenes: [
            "img/productos/ramo-tulipanes1.1.png"
        ],

        precio: "20.00",

        cantidad: "🌷 10 tulipanes + 🐝 1 Abejita",

        caracteristica: "🧶 Ramo artesanal",

        disponible: true,

        detalles: {
            material: "Lana de algodón",
            tamaño: "30x30 cm aproximadamente",
            colores: "Rojo, rosa y morado"
        }
    },

    {
        nombre: "Llavero de pollito con sombrero",

        descripcion: "Hermoso llavero de pollito con sombrero tejido a mano.",

        imagenes: [
            "img/productos/pollo1-1.png"
        ],

        precio: "3.00",

        cantidad: "🐤 1 pieza",

        caracteristica: "🧶 Personaje artesanal",

        disponible: true,

        detalles: {
            material: "Lana de algodón",
            tamaño: "8x6 cm aproximadamente",
            colores: "Amarillo y lila"
        }
    },

    {
        nombre: "Llavero de pollito con gorra",

        descripcion: "Hermoso llavero de pollito con gorra tejido a mano.",

        imagenes: [
            "img/productos/pollo-gorra1-1.png"
        ],

        precio: "3.00",

        cantidad: "🐤 1 pieza",

        caracteristica: "🧶 Personaje artesanal",

        disponible: true,

        detalles: {
            material: "Lana de algodón",
            tamaño: "8x6 cm aproximadamente",
            colores: "Amarillo y negro"
        }
    },

    {
        nombre: "Llaveros de girasoles",

        descripcion: "Hermosos llaveros de girasoles tejidos a mano.",

        imagenes: [
            "img/productos/girasoles1-1.png"
        ],

        precio: "1.00",

        cantidad: "🌻 1 llavero",

        caracteristica: "🧶 Llaveros artesanales",

        disponible: true,

        detalles: {
            material: "Lana de algodón",
            tamaño: "5x5 cm aproximadamente",
            colores: "Amarillo, verde y blanco"
        }
    },

    {
        nombre: "Tulipán",

        descripcion: "Hermoso tulipán tejido a mano.",

        imagenes: [
            "img/productos/tulipan1-1.png"
        ],

        precio: "2.00",

        cantidad: "🌷 1 tulipán",

        caracteristica: "💐 Flor artesanal",

        disponible: true,

        detalles: {
            material: "Lana de algodón",
            tamaño: "22x8 cm aproximadamente",
            colores: "Varios colores"
        }
    },

    {
        nombre: "Llavero de pandita",

        descripcion: "Hermoso llavero de pandita tejido a mano.",

        imagenes: [
            "img/productos/panda1-1.png"
        ],

        precio: "3.50",

        cantidad: "🐼 1 pieza",

        caracteristica: "🧶 Amigurumi artesanal",

        disponible: true,

        detalles: {
            material: "Lana de algodón",
            tamaño: "11x8 cm aproximadamente",
            colores: "Blanco y negro"
        }
    },

    {
        nombre: "Mini Ramo de tulipanes",

        descripcion: "Hermoso mini ramo de tulipanes tejido a mano.",

        imagenes: [
            "img/productos/miniramo-tulipanes1-1.png"
        ],

        precio: "6.00",

        cantidad: "🌷 3 tulipanes",

        caracteristica: "💐 Mini ramo artesanal",

        disponible: true,

        detalles: {
            material: "Lana de algodón",
            tamaño: "23x18 cm aproximadamente",
            colores: "Varios colores"
        }
    },

    {
        nombre: "Girasol en maceta",

        descripcion: "Hermoso girasol en maceta tejido a mano.",

        imagenes: [
            "img/productos/ramo-girasoles.png"
        ],

        precio: "3.75",

        cantidad: "🌻 1 girasol",

        caracteristica: "🪴 Decoración artesanal",

        disponible: true,

        detalles: {
            material: "Lana de algodón",
            tamaño: "18x6 cm aproximadamente",
            colores: "Amarillo, verde y café"
        }
    }
];


ramos.forEach(ramo => {

    const tarjeta = new Tarjeta(
        ramo.nombre,
        ramo.descripcion,
        ramo.imagenes,
        ramo.precio,
        ramo.cantidad,
        ramo.caracteristica,
        ramo.disponible,
        ramo.detalles
    );

    contenedor.appendChild(tarjeta.crear());

});
