import { User, LogOut } from "lucide-react";
import PanelGeneral from "../PanelGeneral";

const PanelUsuario = () => {
  return (
    <PanelGeneral className="w-48 flex flex-col space-y-3">
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
    </PanelGeneral>
  );
};

export default PanelUsuario;
