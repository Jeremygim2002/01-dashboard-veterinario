import { useState } from "react";
import ModalGeneral from "../common/ModalGeneral";

const ModalOrdenes = ({ isOpen, onClose, onSubmit }) => {
  const [dniDuenio, setDniDuenio] = useState("");

  const [nombreDuenio, setNombreDuenio] = useState("");

  const [nombremascota, setnombreMascota] = useState("");

  const [razaMascota, setRazaMascota] = useState("");

  const [edadMascota, setEdadMascota] = useState("");

  const [categoria, setCategoria] = useState("");

  const [tipoCategoria, setTipoCategoria] = useState("");

  const [precio, setPrecio] = useState("");

  const [duracion, setDuracion] = useState("");

  const [nombreVeterinario, setNombreVeterinario] = useState("");

  const [dniVeterinario, setDniVeterinario] = useState("");

  const [rolveterinario, setRolVeterinario] = useState("");

  const [estado, setEstado] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      dniDuenio,
      nombreDuenio,
      nombremascota,
      razaMascota,
      edadMascota,
      categoria,
      tipoCategoria,
      precio,
      duracion,
      nombreVeterinario,
      dniVeterinario,
      rolveterinario,
    });
    onClose();
  };

  return (
    <ModalGeneral isOpen={isOpen} onClose={onClose} title="Agregar personal">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
          <input
            className="col-span-2 bg-input border border-input-borde focus:outline-none focus:ring-2 focus:ring-input-foco text-texto placeholder-texto-secundario rounded-lg pl-4 pr-4 py-2"
            type="text"
            placeholder="Dni dueño"
            value={dniDuenio}
            onChange={(e) => setDniDuenio(e.target.value)}
          />

          <input
            className="col-span-2 bg-input border border-input-borde focus:outline-none focus:ring-2 focus:ring-input-foco text-texto placeholder-texto-secundario rounded-lg pl-4 pr-4 py-2"
            type="email"
            placeholder="Nombre del dueño"
            value={nombreDuenio}
            onChange={(e) => setNombreDuenio(e.target.value)}
          />

          <select
            className="col-span-4 bg-input border border-input-borde focus:outline-none focus:ring-2 focus:ring-input-foco text-texto placeholder-texto-secundario rounded-lg pl-4 pr-4 py-2"
            value={nombremascota}
            onChange={(e) => setnombreMascota(e.target.value)}
          >
            <option value="administrador">Nombre de la mascota</option>
            <option value="administrador">Administrador</option>
            <option value="veterinario">Veterinario</option>
            <option value="recepcionista">Recepcionista</option>
            <option value="limpieza">Limpieza</option>
          </select>

          <input
            className="col-span-2 bg-input border border-input-borde focus:outline-none focus:ring-2 focus:ring-input-foco text-texto placeholder-texto-secundario rounded-lg pl-4 pr-4 py-2"
            type="email"
            placeholder="Raza de la mascota"
            value={razaMascota}
            onChange={(e) => setRazaMascota(e.target.value)}
          />

          <input
            className="col-span-2 bg-input border border-input-borde focus:outline-none focus:ring-2 focus:ring-input-foco text-texto placeholder-texto-secundario rounded-lg pl-4 pr-4 py-2"
            type="email"
            placeholder="Edad de la mascota"
            value={edadMascota}
            onChange={(e) => setEdadMascota(e.target.value)}
          />

          <select
            className="col-span-2 bg-input border border-input-borde focus:outline-none focus:ring-2 focus:ring-input-foco text-texto placeholder-texto-secundario rounded-lg pl-4 pr-4 py-2"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="administrador">Categoria</option>
            <option value="administrador">Administrador</option>
            <option value="veterinario">Veterinario</option>
            <option value="recepcionista">Recepcionista</option>
            <option value="limpieza">Limpieza</option>
          </select>
          <select
            className="col-span-2 bg-input border border-input-borde focus:outline-none focus:ring-2 focus:ring-input-foco text-texto placeholder-texto-secundario rounded-lg pl-4 pr-4 py-2"
            value={tipoCategoria}
            onChange={(e) => setTipoCategoria(e.target.value)}
          >
            <option value="administrador">Tipo Categoria</option>
            <option value="administrador">Administrador</option>
            <option value="veterinario">Veterinario</option>
            <option value="recepcionista">Recepcionista</option>
            <option value="limpieza">Limpieza</option>
          </select>

          <input
            className="col-span-2 bg-input border border-input-borde focus:outline-none focus:ring-2 focus:ring-input-foco text-texto placeholder-texto-secundario rounded-lg pl-4 pr-4 py-2"
            type="email"
            placeholder="Precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />

          <input
            className="col-span-2 bg-input border border-input-borde focus:outline-none focus:ring-2 focus:ring-input-foco text-texto placeholder-texto-secundario rounded-lg pl-4 pr-4 py-2"
            type="email"
            placeholder="Duracion"
            value={duracion}
            onChange={(e) => setDuracion(e.target.value)}
          />

          <select
            className="col-span-4 bg-input border border-input-borde focus:outline-none focus:ring-2 focus:ring-input-foco text-texto placeholder-texto-secundario rounded-lg pl-4 pr-4 py-2"
            value={nombreVeterinario}
            onChange={(e) => setNombreVeterinario(e.target.value)}
          >
            <option value="administrador">Nombre del veterinario</option>
            <option value="administrador">Administrador</option>
            <option value="veterinario">Veterinario</option>
            <option value="recepcionista">Recepcionista</option>
            <option value="limpieza">Limpieza</option>
          </select>

          <input
            className="col-span-2 bg-input border border-input-borde focus:outline-none focus:ring-2 focus:ring-input-foco text-texto placeholder-texto-secundario rounded-lg pl-4 pr-4 py-2"
            type="email"
            placeholder="dni del veterinario"
            value={dniVeterinario}
            onChange={(e) => setDniVeterinario(e.target.value)}
          />

          <input
            className="col-span-2 bg-input border border-input-borde focus:outline-none focus:ring-2 focus:ring-input-foco text-texto placeholder-texto-secundario rounded-lg pl-4 pr-4 py-2"
            type="email"
            placeholder="rol del veterinario"
            value={rolveterinario}
            onChange={(e) => setRolVeterinario(e.target.value)}
          />
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
            className="bg-boton-primario hover:bg-boton-hover text-white font-medium  mr-4 py-2 px-4 rounded-lg"
          >
            Buscar
          </button>
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

export default ModalOrdenes;
