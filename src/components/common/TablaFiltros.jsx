import { Search } from "lucide-react";
import Select from "./forms/Select"
import Input from "./forms/Input"

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
          <h2 className="text-xl font-semibold text-texto">Filtros</h2>
        </div>

        <div className="flex flex-wrap gap-4 mt-4 w-full">
          {/* Filtro 1 */}
          <div className="relative flex-1 min-w-[150px]">
            <Select className="w-full pl-3 pr-10 ">
              <option value="">{filtro_1.label}</option>
              {filtro_1.options.map((opt, index) => (
                <option key={index} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </Select>
          </div>

          {/* Filtro 2 */}
          <div className="relative flex-1 min-w-[150px]">
            <Select className="w-full pl-3 pr-10">
              <option value="">{filtro_2.label}</option>
              {filtro_2.options.map((opt, index) => (
                <option key={index} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </Select>
          </div>

          {/* Filtro 3 */}
          <div className="relative flex-1 min-w-[150px]">
            <Select className="w-full pl-3 pr-10">
              <option value="">{filtro_3.label}</option>
              {filtro_3.options.map((opt, index) => (
                <option key={index} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </Select>
          </div>
        </div>
      </div>

      {/* Buscador + Paginación + Agregar */}
      <div className="flex justify-between items-center gap-4 mb-6">
        <div className="relative">
          <Input
            className="pl-10 pr-4"
            type="text"
            placeholder="Buscar ..."
            onChange={handleSearch}
            value={busqueda}
          />
          <Search className="absolute mr-10 top-2.5 text-texto-secundario" size={18} />
        </div>

        <div className="flex items-center gap-4">
          <div className="relative w-28">
            <Select className="w-full">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
            </Select>
          </div>

          <button 
           onClick={onClickBoton}
          className="bg-boton-primario hover:bg-boton-hover text-texto font-medium py-2 px-4 rounded-lg uppercase">
            {botonTexto || "Agregar"}
          </button>
        </div>
      </div>
    </>
  );
};

export default TablaFiltros;
