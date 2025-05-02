// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import FiltroTabla from "../common/TablaFiltros";

// Datos de ejemplo
const DATA_USUARIOS = [
  {
    id: 1,
    nombre_mascota: "Luna",
    raza_mascota: "Labrador Retriever",
    peso_mascota: 25.5,
    id_dueno: 10,
    nombre_dueno: "Carlos Pérez",
    telefono: "987654321",
  },
  {
    id: 2,
    nombre_mascota: "Tom",
    raza_mascota: "Siamés",
    peso_mascota: 4.2,
    id_dueno: 10,
    nombre_dueno: "Ana Gómez",
    telefono: "923456789",
  },
  {
    id: 3,
    nombre_mascota: "Rocky",
    raza_mascota: "Bulldog Francés",
    peso_mascota: 13.8,
    id_dueno: 10,
    nombre_dueno: "Luis Fernández",
    telefono: "912345678",
  },
  {
    id: 4,
    nombre_mascota: "Bella",
    raza_mascota: "Golden Retriever",
    peso_mascota: 30.0,
    id_dueno: 10,
    nombre_dueno: "Sofía Ramírez",
    telefono: "956789123",
  },
  {
    id: 5,
    nombre_mascota: "Nala",
    raza_mascota: "Maine Coon",
    peso_mascota: 5.7,
    id_dueno: 10,
    nombre_dueno: "Miguel Torres",
    telefono: "987123456",
  },
];

const TablaUsuarios = () => {
  const [busqueda, setBusqueda] = useState("");
  const usuarios = DATA_USUARIOS;

  const handleSearch = (e) => {
    setBusqueda(e.target.value.toLowerCase());
  };

  const serviciosFiltrados = usuarios.filter(
    (usuario) =>
      usuario.nombre_mascota.toLowerCase().includes(busqueda.toLowerCase()) ||
      usuario.nombre_dueno.toLowerCase().includes(busqueda.toLowerCase())
  );

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
          label: "Dueño",
          options: [
            { value: "usuario1", label: "Carlos Pérez" },
            { value: "usuario2", label: "Ana Gómez" },
            { value: "usuario3", label: "Luis Fernández" },
          ],
        }}
        filtro_2={{
          label: "Raza",
          options: [
            { value: "labrador", label: "Labrador Retriever" },
            { value: "siames", label: "Siamés" },
            { value: "golden", label: "Golden Retriever" },
          ],
        }}
        filtro_3={{
          label: "Peso",
          options: [
            { value: "ligero", label: "Menor a 10kg" },
            { value: "medio", label: "10kg - 20kg" },
            { value: "pesado", label: "Más de 20kg" },
          ],
        }}
        botonTexto="Agregar usuario"
      />

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Nombre Mascota
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Raza
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Peso
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                DNI dueño
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Nombre dueño
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Telefono
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {serviciosFiltrados.map((usuario) => (
              <motion.tr
                key={usuario.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100 font-medium">
                  {usuario.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100 font-medium">
                  {usuario.nombre_mascota}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100 font-medium">
                  {usuario.raza_mascota}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100 font-medium">
                  {usuario.peso_mascota.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100 font-medium">
                  {usuario.id_dueno}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 font-medium">
                  {usuario.nombre_dueno}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 font-medium">
                  {usuario.telefono}
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

export default TablaUsuarios;
