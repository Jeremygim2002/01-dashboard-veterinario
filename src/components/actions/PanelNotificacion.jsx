import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const NotificationPanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="absolute right-2 top-16 w-64 sm:w-72 bg-slate-900 border border-slate-700 rounded-xl shadow-xl p-4 flex flex-col space-y-3 z-50"
    >
      <div className="flex items-center space-x-2 cursor-pointer">
        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="text-sm text-slate-100">Nueva notificación: Nuevo cambio</span>
      </div>
      <div className="flex items-center space-x-2 cursor-pointer">
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="text-sm text-slate-100">Actualización disponible</span>
      </div>
      <div className="flex items-center space-x-2 cursor-pointer">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="text-sm text-slate-100">Error en el sistema</span>
      </div>
    </motion.div>
  );
};

export default NotificationPanel;
