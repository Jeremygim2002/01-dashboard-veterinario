// src/components/usuarios/ModalVerUsuario.jsx
import ModalGeneral from "../common/ModalGeneral";

const ModalVerUsuario = ({ isOpen, onClose, usuario }) => {
  if (!usuario) return null;

  return (
    <ModalGeneral isOpen={isOpen} onClose={onClose} title="Información del usuario">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-texto">
        <p><strong>Nombre del usuario:</strong> {usuario.nombre_usuario}</p>
        <p><strong>DNI:</strong> {usuario.dni}</p>
        <p><strong>Nombre de la mascota:</strong> {usuario.nombre_mascota}</p>
        <p><strong>Raza:</strong> {usuario.raza_mascota}</p>
        <p><strong>Edad:</strong> {usuario.edad_mascota} años</p>
        <p><strong>Estado:</strong> {usuario.estado ? "Activo" : "Inactivo"}</p>
      </div>
    </ModalGeneral>
  );
};

export default ModalVerUsuario;
