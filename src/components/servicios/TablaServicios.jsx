// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Edit, Search, Trash2, PlusCircle } from "lucide-react";
import { useState } from "react";
import FiltroTabla from "../common/FiltroTabla";

// Datos de ejemplo
const PRODUCT_DATA = [
    { id: 1, name: "Corte", category: "Peluquería y Estética", price: 59.99, disponibilidad: true },
    { id: 2, name: "Baño", category: "Peluquería y Estética", price: 39.99, disponibilidad: true },
    { id: 3, name: "Vacuna I", category: "Medicina Preventiva", price: 199.99, disponibilidad: true },
    { id: 4, name: "Vacuna II", category: "Medicina Preventiva", price: 29.99, disponibilidad: true },
    { id: 5, name: "Vacuna III", category: "Diagnóstico y Tratamiento", price: 79.99, disponibilidad: true },
  ];
  
  const TablaServicios = () => {
    const [busqueda, setBusqueda] = useState("");
    const [servicios, setServicios] = useState(PRODUCT_DATA);
  
    const handleSearch = (e) => {
      setBusqueda(e.target.value.toLowerCase());
    };
  
    const toggleDisponibilidad = (id) => {
      setServicios((prev) =>
        prev.map((prod) =>
          prod.id === id
            ? { ...prod, disponibilidad: !prod.disponibilidad }
            : prod
        )
      );
    };
  
    const serviciosFiltrados = servicios.filter(
      (product) =>
        product.name.toLowerCase().includes(busqueda.toLowerCase()) ||
        product.category.toLowerCase().includes(busqueda.toLowerCase())
    );
  
    const handleSeleccionarProducto = (producto) => {
      console.log("Producto seleccionado:", producto);
      // Aquí podrías abrir un modal, añadirlo a un carrito, etc.
    };
  
    const categoriaOptions = [
      { value: "producto1", label: "Medicina Preventiva" },
      { value: "producto2", label: "Diagnóstico y Tratamiento" },
      { value: "producto3", label: "Peluquería y Estética" },
    ];
  
    const disponibilidadOptions = [
      { value: "cat1", label: "Disponible" },
      { value: "cat2", label: "No disponible" },
    ];
  
    const precioOptions = [
      { value: "activo", label: "Mayor a 100" },
      { value: "inactivo", label: "Menor a 100" },
    ];
  
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
          categoriaOptions={categoriaOptions}
          disponibilidadOptions={disponibilidadOptions}
          precioOptions={precioOptions}
        />
  
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr>
                <th className="px-1 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Añadir
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Nombre
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Categoría
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Precio
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Disponible
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {serviciosFiltrados.map((product) => (
                <motion.tr
                  key={product.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-100 font-medium">
                    <button
                      onClick={() => handleSeleccionarProducto(product)}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <PlusCircle size={20} />
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100 font-medium">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    <button
                      onClick={() => toggleDisponibilidad(product.id)}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors duration-300 ${
                        product.disponibilidad ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      <motion.div
                        animate={{ x: product.disponibilidad ? 24 : 0 }}
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