import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/common/Sidebar";


import PaginaAnalisis from "./pages/PaginaAnalisis";
import PaginaServicios from "./pages/PaginaServicios";
import PaginaOrdenes from "./pages/PaginaOrdenes";
import PaginaPersonal from "./pages/PaginaPersonal";
import PaginaUsuarios from "./pages/PaginaUsuarios";


function App() { 
  return (
    <div className="flex h-screen bg-slate-900 text-slate-100 overflow-hidden">
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 bg-opacity-70" /> 
      <div className="absolute inset-0 backdrop-blur-sm" /> 
    </div>
      {/* Termina Fondo */}
 
			<Sidebar />
        <Routes>
          <Route path="/" element={<PaginaAnalisis />} />
          <Route path="/Servicios" element={<PaginaServicios />} />
          <Route path="/Ordenes" element={<PaginaOrdenes/>} />
          <Route path="/Personal" element={<PaginaPersonal />} />
          <Route path="/Usuarios" element={<PaginaUsuarios />} />
        </Routes>
    </div>
  );
}

export default App;