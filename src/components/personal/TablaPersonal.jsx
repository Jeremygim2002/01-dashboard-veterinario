// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import FiltroTabla from "../common/TablaFiltros";
import { useTablaDatos } from "../../hooks/useTablaDatos";
import { useState } from "react";
import ModalPersonal from "./ModalPersonal";
import TablaBase from "../common/TablaBase";

// Datos de ejemplo
const DATA_PERSONAL = [
  {
    id: 1,
    nombre: "Carlos Pérez",
    correo: "carlos.perez@example.com",
    telefono: "123456789",
    dni: "12345678",
    rol: "Veterinario",
    estado: false,
  },
  {
    id: 2,
    nombre: "Ana Gómez",
    correo: "ana.gomez@example.com",
    telefono: "987654321",
    dni: "12345678",
    rol: "Recepcionista",
    estado: true,
  },
  {
    id: 3,
    nombre: "Luis Fernández",
    correo: "luis.fernandez@example.com",
    telefono: "456789123",
    dni: "12345678",
    rol: "Administrador",
    estado: false,
  },
  {
    id: 4,
    nombre: "Sofía Ramírez",
    correo: "sofia.ramirez@example.com",
    telefono: "456789123",
    dni: "12345678",
    rol: "Asistente Veterinario",
    estado: true,
  },
  {
    id: 5,
    nombre: "Miguel Torres",
    correo: "miguel.torres@example.com",
    telefono: "456789123",
    dni: "12345678",
    rol: "Especialista en Peluquería",
    estado: true,
  },
];

const TablaPersonal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleAgregar = (nuevoPersonal) => {
    // Aquí actualizas tu estado o envías a la base de datos
    console.log("Nuevo personal:", nuevoPersonal);
  };

  const {
    busqueda,
    handleSearch,
    toggleEstado,
    datosFiltrados: personalFiltrado,
  } = useTablaDatos(DATA_PERSONAL, ["nombre", "rol"]);

  const handleSeleccionarPersonal = (personal) => {
    console.log("Producto seleccionado:", personal);
    // Aquí podrías abrir un modal, añadirlo a un carrito, etc.
  };

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
        onClickBoton={() => setModalOpen(true)}
      />
      <ModalPersonal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAgregar}
      />

      <TablaBase
        columnas={[
          { id: "id", label: "ID" },
          { id: "nombre", label: "Nombre" },
          { id: "correo", label: "Correo" },
          { id: "telefono", label: "Teléfono" },
          { id: "dni", label: "DNI" },
          { id: "rol", label: "Rol" },
        ]}
        datos={personalFiltrado}
        onVer={handleSeleccionarPersonal}
        onEditar={(p) => console.log("Editar", p)}
        onEliminar={(id) => console.log("Eliminar ID:", id)}
        onToggleEstado={toggleEstado}
      />
    </motion.div>
  );
};

export default TablaPersonal;
