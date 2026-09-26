import { Tarjeta } from "./targeta.js";

const contenedor = document.getElementById("contenedor-ramos");


const ramo1 = new Tarjeta(
    "Ramo de Rosas",
    "Hermoso ramo de rosas rojas, ideal para expresar amor y cariño.",
    "img/ramo1.jpg",
    "25.00"
);


const ramo2 = new Tarjeta(
    "Ramo Primavera",
    "Una combinación de flores frescas y coloridas para cualquier ocasión.",
    "img/ramo2.jpg",
    "30.00"
);


const ramo3 = new Tarjeta(
    "Ramo Elegancia",
    "Una selección elegante de flores para sorprender a esa persona especial.",
    "img/ramo3.jpg",
    "35.00"
);


contenedor.appendChild(ramo1.crear());
contenedor.appendChild(ramo2.crear());
contenedor.appendChild(ramo3.crear());