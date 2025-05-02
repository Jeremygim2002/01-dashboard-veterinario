/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fondo: "#121826",         // Fondo principal (Páginas dentro del dashboard)
        panel: "#212936",         // Sidebar y Header
        borde: "#374151",         // Bordes de componentes
        texto: "#E2E8F0",         // Texto principal
        superficie: "#1E293B",    // Color de divs y tablas 
        superficieBorde: "#334155", // Bordes de divs y tablas
        botonPrimario: "#0EA5E9", // Botón principal dentro de divs
        botonHover: "#0284C7",    // Hover del botón principal
        botonModal: "#10B981",    // Botón dentro del modal
        botonModalHover: "#059669", // Hover del botón en modal
        input: "#1E293B",         // Fondo de los inputs
        inputBorde: "#3B82F6",    // Borde de los inputs
        inputFoco: "#60A5FA",     // Hover/focus de los inputs
        modal: "#1F2937",         // Fondo del modal
        sombra: "rgba(0, 0, 0, 0.6)", // Sombra del modal
      },
      fontFamily: {
        titulo: ['Poppins', 'sans-serif'], // fuente personalizada para títulos
        cuerpo: ['Poppins', 'sans-serif'], // fuente para cuerpo de texto
      },
    },
  },
  plugins: [],
}