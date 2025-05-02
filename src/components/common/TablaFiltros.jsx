// src/components/common/FiltroTabla.jsx
import { Search } from "lucide-react";

const TablaFiltros = ({
  busqueda,
  handleSearch,
  filtro_1,
  filtro_2,
  filtro_3,
  botonTexto,
  onClickBoton,
}) => {
  return (
    <>
      <div className="mb-6">
        <div className="flex justify-start">
          <h2 className="text-xl font-semibold text-gray-100">Filtros</h2>
        </div>

        <div className="flex flex-wrap gap-4 mt-4 w-full">
          {/* Filtro 1 */}
          <div className="relative flex-1 min-w-[150px]">
            <select className="w-full bg-gray-700 text-white rounded-lg pl-3 pr-10 py-2">
              <option value="">{filtro_1.label}</option>
              {filtro_1.options.map((opt, index) => (
                <option key={index} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Filtro 2 */}
          <div className="relative flex-1 min-w-[150px]">
            <select className="w-full bg-gray-700 text-white rounded-lg pl-3 pr-10 py-2">
              <option value="">{filtro_2.label}</option>
              {filtro_2.options.map((opt, index) => (
                <option key={index} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Filtro 3 */}
          <div className="relative flex-1 min-w-[150px]">
            <select className="w-full bg-gray-700 text-white rounded-lg pl-3 pr-10 py-2">
              <option value="">{filtro_3.label}</option>
              {filtro_3.options.map((opt, index) => (
                <option key={index} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Buscador + Paginación + Agregar */}
      <div className="flex justify-between items-center gap-4 mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar ..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2"
            onChange={handleSearch}
            value={busqueda}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>

        <div className="flex items-center gap-4">
          <div className="relative w-28">
            <select className="w-full bg-gray-700 text-white rounded-lg pl-3 pr-6 py-2">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
            </select>
          </div>

          <button 
           onClick={onClickBoton}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg uppercase">
            {botonTexto || "Agregar"}
          </button>
        </div>
      </div>
    </>
  );
};

export default TablaFiltros;
