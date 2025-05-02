import React from "react";
import {
  BarChart2,
  SquareChartGantt,
  Menu,
  CalendarPlus,
  SquareUserRound,
  ShoppingCart,
  BriefcaseBusiness,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

const COLOR_ICONS = "#34D399";

{
  /* Definir los iconos */
}
const SIDEBAR_ITEMS = [
  {
    name: "Analisis",
    icon: BarChart2,
    color: COLOR_ICONS, 
    href: "/",
  },
  {
    name: "Servicios",
    icon: ShoppingCart,
    color: COLOR_ICONS, 
    href: "/servicios",
  },
  {
    name: "Usuarios",
    icon: SquareUserRound,
    color: COLOR_ICONS, 
    href: "/usuarios",
  },
  {
    name: "Personal",
    icon: BriefcaseBusiness,
    color: COLOR_ICONS, 
    href: "/personal",
  },
  {
    name: "Ordenes",
    icon: SquareChartGantt,
    color: COLOR_ICONS, 
    href: "/ordenes",
  },
  {
    name: "Calendario",
    icon: CalendarPlus,
    color: COLOR_ICONS, 
    href: "/calendario",
  },

];

const Sidebar = () => {
  const [SidebarAbierto, setSidebarAbierto] = useState(true);

  return (
    <motion.div
      className={`relative z-10 transition-all duration-500 ease-in-out flex-shrink-0 ${SidebarAbierto ? "w-64" : "w-20"}`}
      animate={{ width: SidebarAbierto ? 256 : 80 }}
    >
      <div className="h-full p-4 flex flex-col border-r bg-panel border-b border-borde text-texto">
        <motion.button
          whileHover={{ scale: 1.2, rotate: 15 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => setSidebarAbierto(!SidebarAbierto)}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
        >
          <motion.div
            animate={{ rotate: SidebarAbierto ? 0 : 180, scale: SidebarAbierto ? 1 : 1.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Menu size={24} />
          </motion.div>
        </motion.button>

        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.href} to={item.href}>
              <motion.div
                className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-all mb-2"
                whileHover={{ scale: 1.1, rotate: -5, transition: { duration: 0.2 } }}
              >
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="flex justify-center items-center"
                >
                  <item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
                </motion.div>

                <AnimatePresence>
                  {SidebarAbierto && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{
                        duration: 0.4,
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                      }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
