/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //  Fondo general
        fondo: "#121826",                   // Fondo principal de cada página

        // Sidebar y Header
        panel: "#212936",                   // Fondo del Header y Sidebar
        borde: "#374151",                   // Bordes generales de la interfaz
        "sidebar-hover": "#2A3344",         // Hover de los ítems del Sidebar

        //  Textos
        texto: "#E2E8F0",                   // Texto principal (titulares y contenido relevante)
        "texto-secundario": "#94A3B8",      // Texto menos destacado (descripciones, etiquetas)

        //  Superficie (Divs dentro del fondo)
        superficie: "#1E293B",               // Fondo de divs y tablas dentro de cada página
        "superficie-borde": "#334155",       // Bordes de los divs/tablas

        //  Botones en Superficie
        "boton-primario": "#0EA5E9",          // Botón principal (acciones generales)
        "boton-hover": "#0284C7",             // Hover del botón principal

        //  Inputs 
        input: "#374151",             // Fondo del input 
        "input-borde": "#4B5563",       // Borde del input 
        "input-foco": "#64748B",        // Hover/foco del input 

        //  Modales
        modal: "#212936",                     // Color igual al de los paneles flotantes del header
        "modal-borde": "#374151",             // Bordes del modal (igual al de los paneles)
        sombra: "rgba(0, 0, 0, 0.6)",         // Sombra para profundidad en modales

        //  Botones en Modal
        "boton-modal": "#283548",             // Botón principal dentro del modal
        "boton-modal-hover": "#059669",       // Hover del botón dentro del modal

        //  Paneles flotantes (Ejemplo: Notificaciones y Usuario en Header)
        "panel-flotante": "#212936",           // Igual al color del modal para mantener relación visual
        "panel-flotante-borde": "#374151",     // Bordes del panel flotante
        "panel-flotante-linea": "#475569", // Sombra para los paneles flotantes


        //  Iconos en Sidebar
        "color-iconos": "#34D399", // Color vibrante para los íconos del Sidebar
        "tabla-linea-inicial": "#E5E7EB",

      },
      fontFamily: {
        titulo: ['Poppins', 'sans-serif'],        // fuente personalizada para títulos
        cuerpo: ['Poppins', 'sans-serif'],        // fuente para cuerpo de texto
      },
    },
  },
  plugins: [],
}