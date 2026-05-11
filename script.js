// BASE DE DATOS ACTUALIZADA
const nivelesCortes = [
    {
        categoria: "Clásicos",
        items: [
            { nombre: "Militar", descripcion: "Muy corto, práctico y de bajo mantenimiento.", imagen: "images/FADE CLASICO.webp", variantes: ["images/FADE CLASICO.webp"] },
            { nombre: "Casquete Corto", descripcion: "Corte corto, limpio y fácil de mantener.", imagen: "images/CASQUETE CORTO.jpeg", variantes: ["images/CASQUETE CORTO.jpeg"] },
            { nombre: "Casquete Regular", descripcion: "Versión un poco más larga con acabado uniforme.", imagen: "images/casqueteregular.jpeg", variantes: ["images/casqueteregular.jpeg"] },
            { nombre: "Casquete Francés", descripcion: "Parte superior con textura y laterales cortos.", imagen: "images/Textured Crop.webp", variantes: ["images/Textured Crop.webp"] }
        ]
    },
    {
        categoria: "Modernos",
        items: [
            { nombre: "Low Fade", descripcion: "Degradado bajo y suave para un look moderno.", imagen: "images/FADE CLASICO.webp", variantes: ["images/FADE CLASICO.webp"] },
            { nombre: "Mid Fade", descripcion: "Degradado medio con transición equilibrada.", imagen: "images/midfadeacabadonormal.jpeg", variantes: ["images/midfadeacabadonormal.jpeg"] },
            { nombre: "High Fade", descripcion: "Degradado alto con contraste marcado.", imagen: "images/UNDERCUT.webp", variantes: ["images/UNDERCUT.webp"] },
            { nombre: "Buzz Fade", descripcion: "Corte parejo y muy corto con fade lateral.", imagen: "images/Buzz Cut.webp", variantes: ["images/Buzz Cut.webp"] },
            { nombre: "Pompadour", descripcion: "Volumen arriba y laterales más limpios.", imagen: "images/POMPADORUR.webp", variantes: ["images/POMPADORUR.webp"] },
            { nombre: "Blending", descripcion: "Transición suave entre longitudes.", imagen: "images/Taper Fade.webp", variantes: ["images/Taper Fade.webp"] },
            { nombre: "French Crop", descripcion: "Flequillo corto con textura frontal.", imagen: "images/Textured Crop.webp", variantes: ["images/Textured Crop.webp"] }
        ]
    },
    {
        categoria: "Urbanos",
        items: [
            { nombre: "Taper Fade", descripcion: "Degradado progresivo y limpio en patillas y nuca.", imagen: "images/Taper Fade.webp", variantes: ["images/Taper Fade.webp"] },
            { nombre: "Mullet", descripcion: "Largo atrás y más corto adelante y a los lados.", imagen: "images/UNDERCUT.webp", variantes: ["images/UNDERCUT.webp"] },
            { nombre: "Burts Fade", descripcion: "Fade circular alrededor de la oreja.", imagen: "images/FADE CLASICO.webp", variantes: ["images/FADE CLASICO.webp"] },
            { nombre: "Mohan", descripcion: "Estilo atrevido con volumen y presencia.", imagen: "images/UNDERCUT.webp", variantes: ["images/UNDERCUT.webp"] }
        ]
    },
    {
        categoria: "Barba",
        items: [
            { nombre: "Arreglos de Barba", descripcion: "Perfilado y forma para una barba limpia.", imagen: "images/Slicked Back.webp", variantes: ["images/Slicked Back.webp"] },
            { nombre: "Rituales de Barba", descripcion: "Tratamiento completo con toalla caliente.", imagen: "images/Slicked Back.webp", variantes: ["images/Slicked Back.webp"] }
        ]
    },
    {
        categoria: "Diseño y Color",
        items: [
            { nombre: "Tintes de Fantasía", descripcion: "Coloración creativa y llamativa.", imagen: "images/Side Part.webp", variantes: ["images/Side Part.webp"] },
            { nombre: "Líneas de Diseño", descripcion: "Detalles precisos marcados con navaja.", imagen: "images/FADE CLASICO.webp", variantes: ["images/FADE CLASICO.webp"] },
            { nombre: "Freestyle", descripcion: "Diseño artístico libre y personalizado.", imagen: "images/UNDERCUT.webp", variantes: ["images/UNDERCUT.webp"] },
            { nombre: "Matización de Cana", descripcion: "Neutraliza tonos amarillentos en canas.", imagen: "images/Taper Fade.webp", variantes: ["images/Taper Fade.webp"] },
            { nombre: "Fases de Decoloración", descripcion: "Proceso profesional para aclarar el tono.", imagen: "images/Side Part.webp", variantes: ["images/Side Part.webp"] },
            { nombre: "Tonos de Fantasía", descripcion: "Gama de colores vibrantes para el cabello.", imagen: "images/Side Part.webp", variantes: ["images/Side Part.webp"] }
        ]
    }
];

const contenedorCortes = document.getElementById('contenedorCortes');

function filtrarCategoria(nombreCategoria) {
    if (!contenedorCortes) return;

    contenedorCortes.innerHTML = '';

    const categoriaEncontrada = nivelesCortes.find(cat => cat.categoria === nombreCategoria);

    if (categoriaEncontrada) {
        const seccion = document.createElement('div');
        seccion.className = 'nivel-section';
        
        const titulo = document.createElement('h3');
        titulo.className = 'categoria-titulo';
        titulo.textContent = categoriaEncontrada.categoria;
        seccion.appendChild(titulo);

        const grid = document.createElement('div');
        grid.className = 'nivel-grid';

        categoriaEncontrada.items.forEach(item => {
            const card = document.createElement('article');
            card.className = 'corte-card';
            
            // Hacemos que toda la tarjeta sea clickeable
            card.onclick = () => abrirVariantes(item.nombre);

            card.innerHTML = `
                <div class="corte-imagen">
                    <img src="${item.imagen}" alt="${item.nombre}" loading="lazy" 
                         onerror="this.onerror=null; this.src='https://via.placeholder.com/300x320?text=Imagen+No+Encontrada';">
                    <div class="overlay-ver-mas">
                        <span><i class="fas fa-search-plus"></i> Ver más</span>
                    </div>
                </div>
                <div class="corte-info">
                    <h4>${item.nombre}</h4>
                    <p class="corte-descripcion">${item.descripcion}</p>
                </div>
            `;
            grid.appendChild(card);
        });

        seccion.appendChild(grid);
        contenedorCortes.appendChild(seccion);

        window.scrollTo({
            top: document.querySelector('.separador-premium').offsetTop - 20,
            behavior: 'smooth'
        });
    }
}

function mostrarMensajeInicial() {
    if (contenedorCortes) {
        contenedorCortes.innerHTML = `
            <div class="mensaje-inicial">
                <i class="fas fa-hand-pointer"></i>
                <p>Elige un estilo en el menú superior para comenzar.</p>
            </div>
        `;
    }
}

const modal = document.getElementById('modalVariantes');
const contenedorVariantes = document.getElementById('contenedorVariantes');
const modalTitulo = document.getElementById('modalTitulo');
const btnCerrar = document.querySelector('.close-modal');

function abrirVariantes(nombreCorte) {
    let corteSeleccionado = null;
    nivelesCortes.forEach(cat => {
        const encontrado = cat.items.find(i => i.nombre === nombreCorte);
        if (encontrado) corteSeleccionado = encontrado;
    });

    // Se abre si tiene al menos una imagen en variantes
    if (corteSeleccionado && corteSeleccionado.variantes.length > 0) {
        modalTitulo.textContent = `Variantes: ${corteSeleccionado.nombre}`;
        contenedorVariantes.innerHTML = ''; 
        
        corteSeleccionado.variantes.forEach(rutaImagen => {
            const img = document.createElement('img');
            img.src = rutaImagen;
            img.alt = corteSeleccionado.nombre;
            contenedorVariantes.appendChild(img);
        });

        modal.style.display = "block";
        document.body.style.overflow = "hidden"; 
    }
}

if (btnCerrar) {
    btnCerrar.onclick = () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    };
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
};

document.addEventListener('DOMContentLoaded', mostrarMensajeInicial);
