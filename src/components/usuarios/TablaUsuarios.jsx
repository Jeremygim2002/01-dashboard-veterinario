// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import FiltroTabla from "../common/TablaFiltros";
import { useTablaDatos } from "../../hooks/useTablaDatos";
import ModalUsuarios from "./ModalUsuarios";

// Datos de ejemplo
const DATA_USUARIOS = [
  {
    id: 1,
    nombre_usuario: "Juan Pérez",
    correo: "perez@gamil.com",
    telefono: 345646546,
    nombre_mascota: "Max",
    raza_mascota: "Labrador",
    edad_mascota: 5,
    sexo: "m",
    estado : true,
  },
  {
    id: 2,
    nombre_usuario: "Juan Pérez",
    correo: "perez@gamil.com",
    telefono: 345646546,
    nombre_mascota: "Max",
    raza_mascota: "Labrador",
    edad_mascota: 5,
    sexo: "m",
    estado : true,
  },
  {
    id: 3,
    nombre_usuario: "Juan Pérez",
    correo: "perez@gamil.com",
    telefono: 345646546,
    nombre_mascota: "Max",
    raza_mascota: "Labrador",
    edad_mascota: 5,
    sexo: "m",
    estado : true,
  },
  {
    id: 4,
    nombre_usuario: "Juan Pérez",
    correo: "perez@gamil.com",
    telefono: 345646546,
    nombre_mascota: "Max",
    raza_mascota: "Labrador",
    edad_mascota: 5,
    sexo: "m",
    estado : true,
  },
  {
    id: 5,
    nombre_usuario: "Juan Pérez",
    correo: "perez@gamil.com",
    telefono: 345646546,
    nombre_mascota: "Max",
    raza_mascota: "Labrador",
    edad_mascota: 5,
    sexo: "m",
    estado : true,
  },
];

const TablaUsuarios = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleAgregar = (nuevoServicio) => {
    // Aquí actualizas tu estado o envías a la base de datos
    console.log("Nuevo personal:", nuevoServicio);
  };
  const {
    busqueda,
    handleSearch,
    toggleEstado,
    datosFiltrados: serviciosFiltrados,
  } = useTablaDatos(DATA_USUARIOS, ["nombre_mascota", "raza_mascota"]);

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
          label: "Categoría",
          options: [
            { value: "medicina", label: "Medicina Preventiva" },
            { value: "diagnostico", label: "Diagnóstico y Tratamiento" },
            { value: "peluqueria", label: "Peluquería y Estética" },
          ],
        }}
        filtro_2={{
          label: "Disponibilidad",
          options: [
            { value: "disponible", label: "Disponible" },
            { value: "no_disponible", label: "No disponible" },
          ],
        }}
        filtro_3={{
          label: "Precio",
          options: [
            { value: "mayor", label: "Mayor a 100" },
            { value: "menor", label: "Menor a 100" },
          ],
        }}
        botonTexto="Agregar usuario"
        onClickBoton={() => setModalOpen(true)}
      />
      <ModalUsuarios
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAgregar}
      />

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Nombre Usuario
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Correo 
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Telefono
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Nombre Mascota
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Raza Mascota
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Edad Mascota
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Sexo Mascota
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
                  {usuario.correo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100 font-medium">
                  {usuario.telefono}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100 font-medium">
                  {usuario.nombre_mascota}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 font-medium">
                  {usuario.raza_mascota}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 font-medium">
                  {usuario.edad_mascota}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 font-medium">
                  {usuario.sexo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-texto ">
                  <button
                    onClick={() => toggleEstado(usuario.id)}
                    className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors duration-300 ${
                      usuario.estado ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    <motion.div
                      animate={{ x: usuario.estado ? 24 : 0 }}
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

export default TablaUsuarios;
