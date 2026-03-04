# Honey Words - Página Web

Sitio web oficial de Honey Words, empresa de papelería y diseños para fiestas, eventos y empresas.

## Descripción

Honey Words es una empresa especializada en crear diseños únicos y productos personalizados para hacer de cada momento una celebración inolvidable. El sitio web presenta la identidad de la marca con una estética elegante inspirada en [Sugar Paper](https://sugarpaper.com/).

## Tecnología Utilizada

- **React 19** - Framework de JavaScript para interfaces de usuario
- **Vite 7** - Build tool y servidor de desarrollo
- **CSS3** - Estilos con variables CSS y diseño responsive
- **Google Fonts** - Tipografías (Cormorant Garamond, Montserrat)

## Estructura del Proyecto

```
honey-words/
├── public/
│   └── vite.svg              # Favicon
├── src/
│   ├── assets/
│   │   └── react.svg         # Logo de React (por defecto)
│   ├── components/           # Componentes React (futuro)
│   ├── App.jsx              # Componente principal
│   ├── App.css              # Estilos específicos del App
│   ├── index.css            # Estilos globales y variables
│   └── main.jsx             # Punto de entrada de React
├── index.html               # HTML principal
├── package.json             # Dependencias del proyecto
├── vite.config.js           # Configuración de Vite
└── eslint.config.js         # Configuración de ESLint
```

## Características del Sitio

### Diseño
- Estética elegante inspirada en Sugar Paper
- Paleta de colores: crema, rosa, navy, dorado
- Tipografía serif (Cormorant Garamond) para títulos
- Tipografía sans-serif (Montserrat) para texto
- Diseño responsive (móvil, tablet, desktop)

### Secciones
1. **Header** - Navegación fija con menú responsive
2. **Hero** - Banner principal con gradiente y animación
3. **Categorías** - Grid de 3 columnas con imágenes
4. **Productos Destacados** - Grid de productos con etiquetas
5. **Nosotros** - Historia de la empresa
6. **Servicios** - 3 servicios principales
7. **Newsletter** - Formulario de suscripción
8. **Footer** - Enlaces, redes sociales y contacto

### Funcionalidades
- Menú mobile con hamburguesa
- Scroll animaciones
- Formulario de newsletter
- Navegación suave entre secciones

## Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## Requisitos

- Node.js 20.19+ o 22.12+ (versiones mínimas requeridas por Vite 7)
- npm 10+

## Personalización

### Colores
Los colores principales están definidos en `src/index.css` como variables CSS:
```css
:root {
  --color-cream: #faf8f5;
  --color-rose: #e8d5d5;
  --color-navy: #1a1a2e;
  --color-gold: #b8956e;
  --color-white: #ffffff;
}
```

### Imágenes
Las imágenes utilizan Unsplash como fuente. Para cambiar las imágenes, edita los arrays `categories`, `products` y las URL en las secciones correspondientes en `src/App.jsx`.

## Licencia

MIT License
