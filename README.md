# 💈 Catálogo de Cortes de Pelo - Barber Shop

Un catálogo web profesional para mostrar diferentes cortes de cabello con descripción, precio y sistema de reserva.

## 📁 Estructura del Proyecto

```
BARBER/
├── index.html      # Página principal HTML
├── styles.css      # Estilos CSS
├── script.js       # Lógica JavaScript
├── README.md       # Este archivo
└── images/         # Carpeta para imágenes (opcional)
```

## ✨ Características

- ✂️ **12 cortes de pelo predefinidos** con nombres, descripciones y precios
- 🎨 **Diseño profesional y moderno** con esquema de colores corporativo
- 🔍 **Sistema de filtros** por categoría (Clásicos, Modernos, Premium)
- 📱 **Totalmente responsive** - funciona perfectamente en móviles y tablets
- ⚡ **Rápido y ligero** - solo HTML, CSS y JavaScript vanilla
- 🎯 **Fácil de personalizar** - datos almacenados en arrays de JavaScript

## 🚀 Cómo Usar

1. **Abre el archivo `index.html` en tu navegador:**
   - Haz clic derecho en `index.html`
   - Selecciona "Abrir con" y elige tu navegador preferido

2. **Interactúa con la página:**
   - Haz clic en los botones de filtro para ver cortes por categoría
   - Haz clic en "Reservar" para simular una reserva
   - Desplázate para ver toda la información

## 🎨 Personalización

### Cambiar Colores
Abre `styles.css` y modifica las variables CSS en la sección `:root`:

```css
:root {
    --color-primary: #1a1a1a;      /* Color principal (negro) */
    --color-secondary: #d4af37;    /* Color secundario (oro) */
    --color-accent: #2d2d2d;       /* Color acento (gris oscuro) */
    --color-text: #333;            /* Color del texto */
    --color-white: #ffffff;        /* Color blanco */
    --color-bg: #f5f5f5;           /* Color de fondo */
}
```

### Agregar Más Cortes
En `script.js`, añade nuevos cortes al array `cortes`:

```javascript
{
    id: 13,
    nombre: "Tu Corte",
    categoria: "clasico",  // clásico, moderno o premium
    descripcion: "Descripción del corte",
    precio: "€XX",
    emoji: "✂"
}
```

### Cambiar Datos de Contacto
En `index.html`, actualiza la sección de contacto con tus datos reales:

```html
<div class="info-item">
    <h3>📞 Teléfono</h3>
    <p>TU_NÚMERO_AQUÍ</p>
</div>
```

### Agregar Imágenes
1. Crea una carpeta `images` en el mismo directorio
2. Coloca tus imágenes en esa carpeta
3. En `script.js`, modifica el HTML de la card para incluir la imagen:

```javascript
<div class="corte-imagen">
    <img src="images/tu-corte.jpg" alt="${corte.nombre}">
</div>
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 769px a 1199px
- **Mobile**: 480px a 768px
- **Pequeños dispositivos**: menos de 480px

## 🔧 Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet (opcional, si decides usar fuentes o iconos externos)

## 📝 Notas Importantes

- **Los precios** están configurados como ejemplos. Actualízalos según tus tarifas
- **El sistema de reserva** actualmente muestra una alerta. Puedes conectarlo a un backend o servicio de email
- **Los emojis** se usan como placeholders. Puedes reemplazarlos con imágenes reales

## 🎯 Próximas Mejoras (Opcionales)

- Agregar galería de fotos
- Sistema de contacto con envío de email
- Integración con calendario de reservas
- Panel de administración para gestionar cortes
- Base de datos para almacenar reservas

## 📞 Soporte

Si necesitas ayuda para personalizar la página o agregar funcionalidades adicionales, no dudes en pedir asistencia.

¡Que disfrutes tu nuevo catálogo web! 💈✨
