import React from "react";
import { User, LogOut } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const PanelUsuario = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="absolute right-2 top-16 w-48 bg-modal border border-modal-borde rounded-xl shadow-xl p-4 flex flex-col space-y-3 z-50"
    >
      <button
        aria-label="Ver perfil"
        className="flex items-center space-x-2 text-texto text-sm hover:bg-sidebar-hover rounded-lg p-2 transition"
      >
        <User size={18} />
        <span>Ver perfil</span>
      </button>

      <hr className="border-panel-flotante-linea" />

      <button className="flex items-center space-x-2 text-red-400 text-sm hover:bg-sidebar-hover rounded-lg p-2 transition">
        <LogOut size={18} />
        <span>Cerrar sesión</span>
      </button>
    </motion.div>
  );
};

export default PanelUsuario;
