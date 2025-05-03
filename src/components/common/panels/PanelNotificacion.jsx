import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const notificaciones = [
  { color: "bg-green-400", texto: "Nueva notificación: Nuevo cambio" },
  { color: "bg-yellow-400", texto: "Actualización disponible" },
  { color: "bg-red-400", texto: "Error en el sistema" },
];

const PanelNotificacion = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="absolute right-2 top-16 w-64 sm:w-72 bg-panel-flotante border border-panel-flotante-borde rounded-xl shadow-xl p-4 flex flex-col space-y-3 z-50"
    >
      {notificaciones.map((item, idx) => (
        <React.Fragment key={idx}>
          <div className="cursor-pointer hover:bg-sidebar-hover rounded-lg p-2 transition flex items-center space-x-2">
            <div className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
            <span className="text-sm text-texto">{item.texto}</span>
          </div>
          {idx < notificaciones.length - 1 && (
            <hr className="border-panel-flotante-linea" />
          )}
        </React.Fragment>
      ))}
    </motion.div>
  );
};

export default PanelNotificacion;
