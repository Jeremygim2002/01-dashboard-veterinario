// src/components/common/TablaBase.jsx
import { Eye, Edit, Trash2 } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const TablaBase = ({
  columnas,
  datos,
  onVer,
  onEditar,
  onEliminar,
  onToggleEstado,
  mostrarEstado = true,
  mostrarAcciones = true,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-tabla-linea-inicial">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-texto-secundario uppercase tracking-wider">
              Ver
            </th>
            {columnas.map((col) => (
              <th
                key={col.id}
                className="px-6 py-3 text-left text-xs font-medium text-texto-secundario uppercase tracking-wider"
              >
                {col.label}
              </th>
            ))}
            {mostrarEstado && (
              <th className="px-6 py-3 text-left text-xs font-medium text-texto-secundario uppercase tracking-wider">
                Estado
              </th>
            )}
            {mostrarAcciones && (
              <th className="px-6 py-3 text-left text-xs font-medium text-texto-secundario uppercase tracking-wider">
                Acciones
              </th>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-modal-borde">
          {datos.map((fila) => (
            <motion.tr
              key={fila.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <td className="px-2 py-2 whitespace-nowrap text-sm text-texto-secundario font-medium">
                <button
                  onClick={() => onVer(fila)}
                  className="text-blue-400 hover:text-blue-300"
                >
                  <Eye size={20} />
                </button>
              </td>

              {columnas.map((col) => (
                <td
                  key={col.id}
                  className="px-6 py-4 whitespace-nowrap text-sm text-texto"
                >
                  {fila[col.id]}
                </td>
              ))}

              {mostrarEstado && (
                <td className="px-6 py-4 whitespace-nowrap text-sm text-texto">
                  <button
                    onClick={() => onToggleEstado(fila.id)}
                    className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors duration-300 ${
                      fila.estado ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    <motion.div
                      animate={{ x: fila.estado ? 24 : 0 }}
                      className="w-4 h-4 bg-white rounded-full shadow-md"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    />
                  </button>
                </td>
              )}

              {mostrarAcciones && (
                <td className="px-6 py-4 whitespace-nowrap text-sm text-texto">
                  <button
                    onClick={() => onEditar(fila)}
                    className="text-indigo-400 hover:text-indigo-300 mr-2"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => onEliminar(fila.id)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              )}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaBase;
