// Catálogo Don Porfirio - JS Actualizado con nuevos niveles
const niveles = [
    {
        titulo: "Corte Clásico",
        items: [
            { 
                nombre: "Casquete Corto", 
                descripcion: "Corte corto, limpio y fácil de mantener.", 
                imagen: "images/CASQUETE CORTO.jpeg",
                variantes: ["images/CASQUETE CORTO.jpeg"]
            },
            { 
                nombre: "Casquete Regular", 
                descripcion: "Versión un poco más larga con acabado uniforme.", 
                imagen: "images/casqueteregular.jpeg", 
                variantes: ["images/casqueteregular.jpeg"] 
            },
            { 
                nombre: "Undercut", 
                descripcion: "Laterales muy cortos con la parte superior notablemente más larga.", 
                imagen: "images/undercut.jpeg", 
                variantes: ["images/undercut.jpeg"] 
            },
            { 
                nombre: "Casquete Francés", 
                descripcion: "Parte superior con textura y laterales cortos.", 
                imagen: "images/Textured Crop.webp", 
                variantes: ["images/Textured Crop.webp"] 
            },
            { 
                nombre: "Militar", 
                descripcion: "Muy corto, práctico y de bajo mantenimiento.", 
                imagen: "images/FADE CLASICO.webp", 
                variantes: ["images/FADE CLASICO.webp"] 
            },
            { 
                nombre: "Low Fade", 
                descripcion: "Degradado bajo y suave para un look moderno.", 
                imagen: "images/FADE CLASICO.webp", 
                variantes: ["images/FADE CLASICO.webp"] 
            },
            { 
                nombre: "Mid Fade", 
                descripcion: "Degradado medio con transición equilibrada.", 
                imagen: "images/midfadeacabadonormal.jpeg", 
                variantes: ["images/midfadeacabadonormal.jpeg"] 
            },
            { 
                nombre: "High Fade", 
                descripcion: "Degradado alto con contraste marcado.", 
                imagen: "images/UNDERCUT.webp", 
                variantes: ["images/UNDERCUT.webp"] 
            },
            { 
                nombre: "Buzz", 
                descripcion: "Corte parejo y corto, rápido de peinar.", 
                imagen: "images/Buzz Cut.webp", 
                variantes: ["images/Buzz Cut.webp"] 
            }
        ]
    },
    {
        titulo: "Corte Moderno",
        items: [
            { nombre: "Pompadour", descripcion: "Volumen arriba y laterales más limpios.", imagen: "images/POMPADORUR.webp", variantes: ["images/POMPADORUR.webp"] },
            { nombre: "Side Part", descripcion: "Raya lateral clásica y elegante.", imagen: "images/Side Part.webp", variantes: ["images/Side Part.webp"] },
            { nombre: "Blending", descripcion: "Transición suave entre longitudes.", imagen: "images/Taper Fade.webp", variantes: ["images/Taper Fade.webp"] },
            { nombre: "French Crop", descripcion: "Flequillo corto con textura frontal.", imagen: "images/Textured Crop.webp", variantes: ["images/Textured Crop.webp"] },
            { nombre: "Taper Fade", descripcion: "Degradado progresivo y limpio.", imagen: "images/Taper Fade.webp", variantes: ["images/Taper Fade.webp"] },
            { nombre: "Mullet", descripcion: "Largo atrás y más corto adelante y a los lados.", imagen: "images/UNDERCUT.webp", variantes: ["images/UNDERCUT.webp"] },
            { nombre: "Burts Fade", descripcion: "Fade personalizado con acabado definido.", imagen: "images/FADE CLASICO.webp", variantes: ["images/FADE CLASICO.webp"] },
            { nombre: "Mohan", descripcion: "Estilo atrevido con volumen y presencia.", imagen: "images/UNDERCUT.webp", variantes: ["images/UNDERCUT.webp"] }
        ]
    },
    {
        titulo: "Corte Urbano",
        items: [
            { nombre: "Diseño y arreglo de barba", descripcion: "Perfilado y forma para una barba limpia.", imagen: "images/Slicked Back.webp", variantes: ["images/Slicked Back.webp"] },
            { nombre: "Ritual de barba", descripcion: "Cuidado completo con tratamiento y acabado.", imagen: "images/Slicked Back.webp", variantes: ["images/Slicked Back.webp"] },
            { nombre: "Tintes de fantasía", descripcion: "Coloración creativa y llamativa.", imagen: "images/Side Part.webp", variantes: ["images/Side Part.webp"] },
            { nombre: "Matización de cana", descripcion: "Neutraliza tonos y refresca el color.", imagen: "images/Taper Fade.webp", variantes: ["images/Taper Fade.webp"] },
            { nombre: "Líneas", descripcion: "Detalles precisos para marcar el estilo.", imagen: "images/FADE CLASICO.webp", variantes: ["images/FADE CLASICO.webp"] },
            { nombre: "Diseños", descripcion: "Dibujos personalizados hechos en el corte.", imagen: "images/Textured Crop.webp", variantes: ["images/Textured Crop.webp"] },
            { nombre: "Freestyle", descripcion: "Creatividad total con un diseño único.", imagen: "images/UNDERCUT.webp", variantes: ["images/UNDERCUT.webp"] }
        ]
    }
];

// Lógica de Renderizado y Modal
const gridCortes = document.getElementById('gridCortes');
const modal = document.getElementById('modalVariantes');
const contenedorVariantes = document.getElementById('contenedorVariantes');
const modalTitulo = document.getElementById('modalTitulo');
const btnCerrar = document.querySelector('.close-modal');

function renderizarCortes() {
    if (!gridCortes) return;
    gridCortes.innerHTML = '';

    niveles.forEach(nivel => {
        const section = document.createElement('section');
        section.className = 'nivel-section';
        section.innerHTML = `<h3>${nivel.titulo}</h3>`;

        const nivelGrid = document.createElement('div');
        nivelGrid.className = 'nivel-grid';

        nivel.items.forEach(item => {
            const card = document.createElement('article');
            card.className = 'corte-card';
            card.innerHTML = `
                <div class="corte-imagen">
                    <img src="${item.imagen}" alt="${item.nombre}" loading="lazy" 
                         onerror="this.onerror=null; this.src='https://via.placeholder.com/300x320?text=Imagen+No+Encontrada';">
                </div>
                <div class="corte-info">
                    <h4>${item.nombre}</h4>
                    <p class="corte-descripcion">${item.descripcion}</p>
                    <button class="btn-variante" onclick="abrirVariantes('${item.nombre}')">Ver Variantes</button>
                </div>
            `;
            nivelGrid.appendChild(card);
        });

        section.appendChild(nivelGrid);
        gridCortes.appendChild(section);
    });
}

function abrirVariantes(nombreCorte) {
    let corteSeleccionado = null;
    niveles.forEach(n => {
        const encontrado = n.items.find(i => i.nombre === nombreCorte);
        if (encontrado) corteSeleccionado = encontrado;
    });

    if (corteSeleccionado) {
        modalTitulo.textContent = `Variantes: ${corteSeleccionado.nombre}`;
        contenedorVariantes.innerHTML = ''; 
        
        corteSeleccionado.variantes.forEach(rutaImagen => {
            const img = document.createElement('img');
            img.src = rutaImagen;
            img.alt = corteSeleccionado.nombre;
            img.onerror = function() { this.src = 'https://via.placeholder.com/300x320?text=Error+al+cargar'; };
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

document.addEventListener('DOMContentLoaded', renderizarCortes);