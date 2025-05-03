import { useState } from "react";
import ModalGeneral from "../common/ModalGeneral";

const ModalPersonal = ({ isOpen, onClose, onSubmit }) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [rol, setRol] = useState("veterinario");
  const [estado, setEstado] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nombre, correo, rol, estado });
    onClose();
  };

  return (
    <ModalGeneral isOpen={isOpen} onClose={onClose} title="Agregar personal">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            className="col-span-3 bg-input border border-input-borde focus:outline-none focus:ring-2 focus:ring-input-foco text-texto placeholder-texto-secundario rounded-lg pl-4 pr-4 py-2"
            type="text"
            placeholder="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            className="col-span-2 bg-input border border-input-borde focus:outline-none focus:ring-2 focus:ring-input-foco text-texto placeholder-texto-secundario rounded-lg pl-4 pr-4 py-2"
            type="email"
            placeholder="Correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <select
            className="col-span-1 bg-input border border-input-borde focus:outline-none focus:ring-2 focus:ring-input-foco text-texto placeholder-texto-secundario rounded-lg pl-4 pr-4 py-2"
            value={rol}
            onChange={(e) => setRol(e.target.value)}
          >
            <option value="administrador">Administrador</option>
            <option value="veterinario">Veterinario</option>
            <option value="recepcionista">Recepcionista</option>
            <option value="limpieza">Limpieza</option>
          </select>
        </div>

        {/* Toggle de estado */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setEstado(!estado)}
            className={`w-10 h-5 rounded-full flex items-center px-1 transition-colors duration-300 ${
              estado ? "bg-green-500" : "bg-red-500"
            }`}
          >
            <div
              className={`w-3 h-3 bg-white rounded-full transition-transform duration-300 transform ${
                estado ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
          <span className="text-sm text-gray-400">
            {estado ? "Activo" : "Inactivo"}
          </span>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
          >
            Guardar
          </button>
        </div>
      </form>
    </ModalGeneral>
  );
};

export default ModalPersonal;
