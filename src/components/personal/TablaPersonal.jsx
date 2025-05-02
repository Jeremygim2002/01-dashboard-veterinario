// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Edit, Trash2 } from "lucide-react";
import FiltroTabla from "../common/TablaFiltros";
import { useTablaDatos } from "../../hooks/useTablas";

// Datos de ejemplo
const DATA_PERSONAL = [
  {
    id: 1,
    nombre: "Carlos Pérez",
    correo: "carlos.perez@example.com",
    rol: "Veterinario",
    estado: true,
  },
  {
    id: 2,
    nombre: "Ana Gómez",
    correo: "ana.gomez@example.com",
    rol: "Recepcionista",
    estado: true,
  },
  {
    id: 3,
    nombre: "Luis Fernández",
    correo: "luis.fernandez@example.com",
    rol: "Administrador",
    estado: false,
  },
  {
    id: 4,
    nombre: "Sofía Ramírez",
    correo: "sofia.ramirez@example.com",
    rol: "Asistente Veterinario",
    estado: true,
  },
  {
    id: 5,
    nombre: "Miguel Torres",
    correo: "miguel.torres@example.com",
    rol: "Especialista en Peluquería",
    estado: true,
  },
];

const TablaPersonal = () => {
  const {
    busqueda,
    handleSearch,
    toggleEstado,
    datosFiltrados: serviciosFiltrados,
  } = useTablaDatos(DATA_PERSONAL, ["nombre", "rol"]);

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <FiltroTabla
        busqueda={busqueda}
        handleSearch={handleSearch}
        filtro_1={{
          label: "Rol",
          options: [
            { value: "veterinario", label: "Veterinario" },
            { value: "recepcionista", label: "Recepcionista" },
            { value: "administrador", label: "Administrador" },
          ],
        }}
        filtro_2={{
          label: "Estado",
          options: [
            { value: "activo", label: "Activo" },
            { value: "inactivo", label: "Inactivo" },
          ],
        }}
        filtro_3={{
          label: "Correo",
          options: [
            { value: "gmail", label: "Gmail" },
            { value: "example", label: "Example.com" },
          ],
        }}
        botonTexto="Agregar personal"
      />

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Correo
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Rol
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Estado
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {serviciosFiltrados.map((personal) => (
              <motion.tr
                key={personal.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100 font-medium">
                  {personal.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100 font-medium">
                  {personal.nombre}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {personal.correo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {personal.rol}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <button
                    onClick={() => toggleEstado(personal.id)}
                    className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors duration-300 ${
                      personal.estado ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    <motion.div
                      animate={{ x: personal.estado ? 24 : 0 }}
                      className="w-4 h-4 bg-white rounded-full shadow-md"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    />
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    <Trash2 size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default TablaPersonal;
