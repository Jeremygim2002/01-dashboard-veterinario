// src/components/common/FiltroTabla.jsx
import { Search } from "lucide-react";

const FiltroTabla = ({
  busqueda,
  handleSearch,
  categoriaOptions,
  disponibilidadOptions,
  precioOptions,
}) => {
  return (
    <>
      <div className="mb-6">
        <div className="flex justify-start">
          <h2 className="text-xl font-semibold text-gray-100">Filtros</h2>
        </div>

        <div className="flex flex-wrap gap-4 mt-4 w-full">
          {/* Categoría */}
          <div className="relative flex-1 min-w-[150px]">
            <select className="w-full bg-gray-700 text-white rounded-lg pl-3 pr-10 py-2">
              <option value="">Categoría</option>
              {categoriaOptions.map((opt, index) => (
                <option key={index} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Disponibilidad */}
          <div className="relative flex-1 min-w-[150px]">
            <select className="w-full bg-gray-700 text-white rounded-lg pl-3 pr-10 py-2">
              <option value="">Disponibilidad</option>
              {disponibilidadOptions.map((opt, index) => (
                <option key={index} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Precio */}
          <div className="relative flex-1 min-w-[150px]">
            <select className="w-full bg-gray-700 text-white rounded-lg pl-3 pr-10 py-2">
              <option value="">Precio</option>
              {precioOptions.map((opt, index) => (
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
            placeholder="Buscar producto..."
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

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
            Agregar producto
          </button>
        </div>
      </div>
    </>
  );
};

export default FiltroTabla;
