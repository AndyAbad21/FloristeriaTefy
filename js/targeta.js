export class Tarjeta {

    constructor(nombre, descripcion, imagen, precio) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.precio = precio;
    }

    crear() {

        const tarjeta = document.createElement("div");

        tarjeta.classList.add("tarjeta");

        tarjeta.innerHTML = `
            <img src="${this.imagen}" alt="${this.nombre}">

            <div class="contenido">

                <h3>${this.nombre}</h3>

                <p>${this.descripcion}</p>

                <span class="precio">$${this.precio}</span>

            </div>
        `;

        return tarjeta;
    }
}