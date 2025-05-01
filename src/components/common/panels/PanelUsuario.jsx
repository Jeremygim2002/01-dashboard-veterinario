import React from 'react';
import { User, LogOut } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const UserPanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="absolute right-2 top-16 w-48 bg-slate-900 border border-slate-700 rounded-xl shadow-xl p-4 flex flex-col space-y-3 z-50"
    >
      <button className="flex items-center space-x-2 text-slate-100 text-sm hover:text-slate-300 transition">
        <User size={18} />
        <span>Ver perfil</span>
      </button>
      <hr className="border-slate-600" />
      <button className="flex items-center space-x-2 text-red-400 text-sm hover:text-red-600 transition">
        <LogOut size={18} />
        <span>Cerrar sesión</span>
      </button>
    </motion.div>
  );
};

export default UserPanel;
