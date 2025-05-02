// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Edit, Trash2, Eye } from "lucide-react";
import { useState } from "react";
import FiltroTabla from "../common/TablaFiltros";

// Datos de ejemplo
const DATA_ORDENES = [
  {
    id_orden: 1,
    nombre_mascota: "Luna",
    dueno: "Carlos Pérez",
    categoria_servicio: "Medicina Preventiva",
    tipo_servicio: "Vacuna Antirrábica",
    precio_servicio: 120.0,
    colaborador_asignado: "Ana Gómez",
    estado: true, // Activo
    fecha: "2025-05-01",
    acciones: "Editar / Eliminar",
  },
  {
    id_orden: 2,
    nombre_mascota: "Tom",
    dueno: "Luis Fernández",
    categoria_servicio: "Peluquería y Estética",
    tipo_servicio: "Baño y Corte",
    precio_servicio: 45.99,
    colaborador_asignado: "Miguel Torres",
    estado: false, // Inactivo
    fecha: "2025-04-29",
    acciones: "Editar / Eliminar",
  },
  {
    id_orden: 3,
    nombre_mascota: "Bella",
    dueno: "Sofía Ramírez",
    categoria_servicio: "Diagnóstico y Tratamiento",
    tipo_servicio: "Examen General",
    precio_servicio: 89.99,
    colaborador_asignado: "Carlos Pérez",
    estado: true, // Activo
    fecha: "2025-05-02",
    acciones: "Editar / Eliminar",
  },
  {
    id_orden: 4,
    nombre_mascota: "Rocky",
    dueno: "Ana Gómez",
    categoria_servicio: "Medicina Preventiva",
    tipo_servicio: "Desparasitación",
    precio_servicio: 60.0,
    colaborador_asignado: "Luis Fernández",
    estado: true, // Activo
    fecha: "2025-05-03",
    acciones: "Editar / Eliminar",
  },
  {
    id_orden: 5,
    nombre_mascota: "Nala",
    dueno: "Miguel Torres",
    categoria_servicio: "Peluquería y Estética",
    tipo_servicio: "Cepillado y Baño",
    precio_servicio: 30.0,
    colaborador_asignado: "Sofía Ramírez",
    estado: false, // Inactivo
    fecha: "2025-04-28",
    acciones: "Editar / Eliminar",
  },
];

const TablaOrdenes = () => {
  const [busqueda, setBusqueda] = useState("");
  const [ordenes, setOrdenes] = useState(DATA_ORDENES);

  const handleSearch = (e) => {
    setBusqueda(e.target.value.toLowerCase());
  };

  const toggleEstado = (id) => {
    setOrdenes((prev) =>
      prev.map((prod) =>
        prod.id === id ? { ...prod, estado: !prod.estado } : prod
      )
    );
  };

  const serviciosFiltrados = ordenes.filter(
    (orden) =>
      orden.nombre_mascota.toLowerCase().includes(busqueda.toLowerCase()) ||
      orden.categoria.toLowerCase().includes(busqueda.toLowerCase())
  );

  const handleSeleccionarProducto = (producto) => {
    console.log("Producto seleccionado:", producto);
    // Aquí podrías abrir un modal, añadirlo a un carrito, etc.
  };

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
        botonTexto="Agregar Orden"
      />

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-1 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Ver
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                ID orden
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Nombe mascota
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                dueño
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                categoria servicio
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                tipo servicio
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                precio servicio
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                colaborador asignado
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                fecha
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                estado
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {serviciosFiltrados.map((orden) => (
              <motion.tr
                key={orden.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-100 font-medium">
                  <button
                    onClick={() => handleSeleccionarProducto(orden)}
                    className="text-blue-400 hover:text-blue-300"
                  >
                    <Eye size={20} />
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100 font-medium">
                  {orden.id_orden}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100 font-medium">
                  {orden.nombre_mascota}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100 font-medium">
                  {orden.dueno}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100 font-medium">
                  {orden.categoria_servicio}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100 font-medium">
                  {orden.tipo_servicio}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100 font-medium">
                  {orden.precio_servicio.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100 font-medium">
                  {orden.colaborador_asignado}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {orden.fecha}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <button
                    onClick={() => toggleEstado(orden.id)}
                    className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors duration-300 ${
                      orden.estado ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    <motion.div
                      animate={{ x: orden.estado ? 24 : 0 }}
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

export default TablaOrdenes;
