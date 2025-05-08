// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Edit, Trash2 } from "lucide-react";
import FiltroTabla from "../common/TablaFiltros";
import { useTablaDatos } from "../../hooks/useTablaDatos";
import {useState} from 'react'
import ModalServicios from "./ModalServicios"

// Datos de ejemplo
const DATA_SERVICIOS = [
  {
    id: 1,
    categoria: "Peluquería y Estética",
    tipo: "baño",
    descripcion: "Baño y corte de pelo",
    duracion: "30",
    precio: 59.99,
    estado: true,
  },
  {
    id: 2,
    categoria: "Peluquería y Estética",
    tipo: "baño",
    descripcion: "Baño y corte de pelo",
    duracion: "30",
    precio: 39.99,
    estado: true,
  },
  {
    id: 3,
    categoria: "Medicina Preventiva",
    tipo: "baño",
    descripcion: "Baño y corte de pelo",
    duracion: "30",
    precio: 199.99,
    estado: true,
  },
  {
    id: 4,
    categoria: "Medicina Preventiva",
    tipo: "baño",
    descripcion: "Baño y corte de pelo",
    duracion: "30",
    precio: 29.99,
    estado: true,
  },
  {
    id: 5,
    categoria: "Diagnóstico y Tratamiento",
    tipo: "baño",
    descripcion: "Baño y corte de pelo",
    duracion: "30",
    precio: 79.99,
    estado: false,
  },
];

const TablaServicios = () => {

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
  } = useTablaDatos(DATA_SERVICIOS, ["categoria", "tipo"]);

  return (
    <motion.div
      className="bg-superficie backdrop-blur-md shadow-lg rounded-xl p-6 border border-superficie-borde mb-8"
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
        botonTexto="Agregar servicio"
        onClickBoton={() => setModalOpen(true)}
        />
        <ModalServicios
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleAgregar}
        />
      

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-tabla-linea-inicial">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-texto-secundario uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-texto-secundario uppercase tracking-wider">
                Categoría
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-texto-secundario uppercase tracking-wider">
                tipo
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-texto-secundario uppercase tracking-wider">
                descripcion
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-texto-secundario uppercase tracking-wider">
                duración
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-texto-secundario uppercase tracking-wider">
                Precio
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-texto-secundario uppercase tracking-wider">
                Estado
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-texto-secundario uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-panel-flotante-borde">
            {serviciosFiltrados.map((servicio) => (
              <motion.tr
                key={servicio.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-texto font-medium">
                  {servicio.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-texto ">
                  {servicio.categoria}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-texto ">
                  {servicio.tipo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-texto ">
                  {servicio.descripcion}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-texto ">
                  {servicio.duracion}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-texto ">
                  S/. {servicio.precio.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-texto ">
                  <button
                    onClick={() => toggleEstado(servicio.id)}
                    className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors duration-300 ${
                      servicio.estado ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    <motion.div
                      animate={{ x: servicio.estado ? 24 : 0 }}
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

export default TablaServicios;
