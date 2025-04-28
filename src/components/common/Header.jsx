import React, { useState } from "react";
import { Bell, User, LogOut } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

import PanelNotificacion from '../actions/PanelNotificacion';
import PanelUsuario from '../actions/PanelUsuario';
import Title from "../actions/Titulo";

const Header = ({ title }) => {
	const [activePanel, setActivePanel] = useState(null);
  
	const togglePanel = (panel) => {
	  setActivePanel(activePanel === panel ? null : panel);
	};
  
	return (
	  <header className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700 z-50 relative">
		<div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
		  {/* Título */}
		  <Title text={title} />
  
		  {/* Barra de herramientas */}
		  <div className="flex items-center space-x-4 sm:space-x-6 relative">
			{/* Barra de búsqueda */}
			<input
			  type="text"
			  placeholder="Buscar..."
			  className="hidden sm:block bg-slate-900 text-slate-100 placeholder-slate-400 rounded-full border border-slate-700 shadow-md px-4 py-2 transition focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-400"
			/>
  
			{/* Botón Notificaciones */}
			<motion.button
			  whileHover={{ scale: 1.1 }}
			  onClick={() => togglePanel('notifications')}
			  className="relative text-slate-100"
			>
			  <Bell size={24} />
			</motion.button>
  
			{/* Botón Usuario */}
			<motion.button
			  whileHover={{ scale: 1.1 }}
			  onClick={() => togglePanel('user')}
			  className="relative"
			>
			  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-600">
				<img src="/avatar.jpg" alt="Usuario" className="w-full h-full object-cover" />
			  </div>
			</motion.button>
  
			{/* Paneles */}
			<AnimatePresence>
			  {activePanel === 'notifications' && <PanelNotificacion />}
			  {activePanel === 'user' && <PanelUsuario />}
			</AnimatePresence>
  
		  </div>
		</div>
	  </header>
	);
  };
  
  export default Header;