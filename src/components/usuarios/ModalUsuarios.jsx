import { useState } from "react";
import ModalGeneral from "../common/ModalGeneral";

const ModalUsuarios = ({ isOpen, onClose, onSubmit }) => {
  const [dni, setDni] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [correo, setCorreo] = useState("");
  const [numero, setNumero] = useState("");
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
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
          <input
            className="col-span-4 bg-input border border-input-borde focus:outline-none focus:ring-2 focus:ring-input-foco text-texto placeholder-texto-secundario rounded-lg pl-4 pr-4 py-2"
            type="text"
            placeholder="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            className="col-span-2 bg-input border border-input-borde focus:outline-none focus:ring-2 focus:ring-input-foco text-texto placeholder-texto-secundario rounded-lg pl-4 pr-4 py-2"
            type="text"
            placeholder="Apellido Paterno"
            value={apellidoPaterno}
            onChange={(e) => setApellidoPaterno(e.target.value)}
          />
          <input
            className="col-span-2 bg-input border border-input-borde focus:outline-none focus:ring-2 focus:ring-input-foco text-texto placeholder-texto-secundario rounded-lg pl-4 pr-4 py-2"
            type="text"
            placeholder="Apellido Materno"
            value={apellidoMaterno}
            onChange={(e) => setApellidoMaterno(e.target.value)}
          />
          <input
            className="col-span-2 bg-input border border-input-borde focus:outline-none focus:ring-2 focus:ring-input-foco text-texto placeholder-texto-secundario rounded-lg pl-4 pr-4 py-2"
            type="email"
            placeholder="Correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <input
            className="col-span-2 bg-input border border-input-borde focus:outline-none focus:ring-2 focus:ring-input-foco text-texto placeholder-texto-secundario rounded-lg pl-4 pr-4 py-2"
            type="number"
            placeholder="Numero de telefono"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
          <input
            className="col-span-2 bg-input border border-input-borde focus:outline-none focus:ring-2 focus:ring-input-foco text-texto placeholder-texto-secundario rounded-lg pl-4 pr-4 py-2"
            type="text"
            placeholder="Dni"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
          />
          <input
            className="col-span-2 bg-input border border-input-borde focus:outline-none focus:ring-2 focus:ring-input-foco text-texto placeholder-texto-secundario rounded-lg pl-4 pr-4 py-2"
            type="text"
            placeholder="Nombre Mascota"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
          />
          <input
            className="col-span-2 bg-input border border-input-borde focus:outline-none focus:ring-2 focus:ring-input-foco text-texto placeholder-texto-secundario rounded-lg pl-4 pr-4 py-2"
            type="text"
            placeholder="Raza Mascota"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
          />
          <input
            className="col-span-2 bg-input border border-input-borde focus:outline-none focus:ring-2 focus:ring-input-foco text-texto placeholder-texto-secundario rounded-lg pl-4 pr-4 py-2"
            type="number"
            placeholder="Edad Mascota"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
          />
          <select
            className="col-span-2 bg-input border border-input-borde focus:outline-none focus:ring-2 focus:ring-input-foco text-texto placeholder-texto-secundario rounded-lg pl-4 pr-4 py-2"
            value={rol}
            onChange={(e) => setRol(e.target.value)}
          >
            <option value="administrador">Sexo</option>
            <option value="veterinario">M</option>
            <option value="recepcionista">F</option>
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
            className="bg-boton-primario hover:bg-boton-hover text-white font-medium py-2 px-4 rounded-lg"
          >
            Guardar
          </button>
        </div>
      </form>
    </ModalGeneral>
  );
};

export default ModalUsuarios;
