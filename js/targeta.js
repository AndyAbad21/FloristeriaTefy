export class Tarjeta {

    constructor(nombre, descripcion, imagenes, precio) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagenes = imagenes;
        this.precio = precio;
        this.imagenActual = 0;
    }

    crear() {

        const tarjeta = document.createElement("div");

        tarjeta.classList.add("tarjeta");

        tarjeta.innerHTML = `
            <div class="galeria">

                <img 
                    class="imagen-producto"
                    src="${this.imagenes[0]}"
                    alt="${this.nombre}"
                >

                <button class="flecha izquierda">
                    &#10094;
                </button>

                <button class="flecha derecha">
                    &#10095;
                </button>

            </div>

            <div class="contenido">

                <h3>${this.nombre}</h3>

                <p>${this.descripcion}</p>

                <span class="precio">$${this.precio}</span>

            </div>
        `;


        const imagen = tarjeta.querySelector(".imagen-producto");

        const izquierda = tarjeta.querySelector(".izquierda");

        const derecha = tarjeta.querySelector(".derecha");


        // SIGUIENTE IMAGEN

        derecha.addEventListener("click", () => {

            this.imagenActual++;

            if (this.imagenActual >= this.imagenes.length) {

                this.imagenActual = 0;

            }

            imagen.src = this.imagenes[this.imagenActual];

        });


        // IMAGEN ANTERIOR

        izquierda.addEventListener("click", () => {

            this.imagenActual--;

            if (this.imagenActual < 0) {

                this.imagenActual = this.imagenes.length - 1;

            }

            imagen.src = this.imagenes[this.imagenActual];

        });


        return tarjeta;
    }
}