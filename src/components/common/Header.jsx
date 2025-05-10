import React, { useState } from "react";
import { Bell } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

import PanelNotificacion from "./panels/PanelNotificacion";
import PanelUsuario from "./panels/PanelUsuario";
import Title from "./Titulo";
import Input from "./forms/Input"

const Header = ({ title }) => {
  const [activePanel, setActivePanel] = useState(null);

  const togglePanel = (panel) => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  return (
    <header className="bg-panel border-b border-borde text-texto z-50 relative">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        <Title text={title} />

        <div className="flex items-center space-x-4 sm:space-x-6 relative">

          <input
            type="text"
            placeholder="Buscar..."
            className="hidden sm:block bg-input text-texto placeholder-texto rounded-full border border-input-borde shadow-md px-4 py-2 transition focus:outline-none focus:ring-2 focus:ring-input-foco"
          />

          {/* Botón Notificaciones */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => togglePanel("notifications")}
            className="relative"
          >
            <Bell size={24} />
          </motion.button>

          {/* Botón Usuario */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => togglePanel("user")}
            className="relative"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-modal-borde shadow-md cursor-pointer">
              <img
                src="/avatar.jpg"
                alt="Avatar de usuario"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.button>

          {/* Paneles */}
          <AnimatePresence>
            {activePanel === "notifications" && <PanelNotificacion />}
            {activePanel === "user" && <PanelUsuario />}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;
