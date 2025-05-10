import { useState } from "react";
import ModalGeneral from "../common/ModalGeneral";
import Button from "../common/forms/Button";
import Input from "../common/forms/Input";
import Select from "../common/forms/Select";
import Switch from "../common/forms/Switch";

const ModalOrdenes = ({ isOpen, onClose, onSubmit }) => {
  const [dniDuenio, setDniDuenio] = useState("");

  const [nombreDuenio, setNombreDuenio] = useState("");

  const [nombreMascota, setNombreMascota] = useState("");

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
      nombreMascota,
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
          <Input
            className="col-span-2"
            type="text"
            placeholder="Dni del dueño"
            value={dniDuenio}
            onChange={(e) => setDniDuenio(e.target.value)}
          />
          <Input
            className="col-span-2"
            type="text"
            placeholder="Nombre del dueño"
            value={nombreDuenio}
            onChange={(e) => setNombreDuenio(e.target.value)}
          />

          <Select
            className="col-span-4"
            value={nombreMascota}
            onChange={(e) => setNombreMascota(e.target.value)}
          >
            <option value="administrador">Nombre de la mascota</option>
            <option value="administrador">Administrador</option>
            <option value="veterinario">Veterinario</option>
            <option value="recepcionista">Recepcionista</option>
            <option value="limpieza">Limpieza</option>
          </Select>

          <Input
            className="col-span-2"
            type="text"
            placeholder="Raza de la mascota"
            value={razaMascota}
            onChange={(e) => setRazaMascota(e.target.value)}
          />

          <Input
            className="col-span-2"
            type="text"
            placeholder="Edad de la mascota"
            value={edadMascota}
            onChange={(e) => setEdadMascota(e.target.value)}
          />

          <Select
            className="col-span-2"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="administrador">Categoria</option>
            <option value="administrador">Administrador</option>
            <option value="veterinario">Veterinario</option>
            <option value="recepcionista">Recepcionista</option>
            <option value="limpieza">Limpieza</option>
          </Select>

          <Select
            className="col-span-2"
            value={tipoCategoria}
            onChange={(e) => setTipoCategoria(e.target.value)}
          >
            <option value="administrador">Tipo Categoria</option>
            <option value="administrador">Administrador</option>
            <option value="veterinario">Veterinario</option>
            <option value="recepcionista">Recepcionista</option>
            <option value="limpieza">Limpieza</option>
          </Select>

          <Input
            className="col-span-2"
            type="text"
            placeholder="Precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />

          <Input
            className="col-span-2"
            type="text"
            placeholder="Duracion"
            value={duracion}
            onChange={(e) => setDuracion(e.target.value)}
          />

          <Select
            className="col-span-4"
            value={nombreVeterinario}
            onChange={(e) => setNombreVeterinario(e.target.value)}
          >
            <option value="administrador">Nombre del veterinario</option>
            <option value="administrador">Administrador</option>
            <option value="veterinario">Veterinario</option>
            <option value="recepcionista">Recepcionista</option>
            <option value="limpieza">Limpieza</option>
          </Select>

          <Input
            className="col-span-2"
            type="text"
            placeholder="dni del veterinario"
            value={dniVeterinario}
            onChange={(e) => setDniVeterinario(e.target.value)}
          />

          <Input
            className="col-span-2"
            type="text"
            placeholder="rol del veterinario"
            value={rolveterinario}
            onChange={(e) => setRolVeterinario(e.target.value)}
          />
          <Input
            className="col-span-4"
            type="date"
            placeholder="rol del veterinario"
            value={rolveterinario}
            onChange={(e) => setRolVeterinario(e.target.value)}
          />
        </div>
        <Switch estado={estado} setEstado={setEstado} />
        <Button>Buscar</Button>
        <Button>Guardar</Button>
      </form>
    </ModalGeneral>
  );
};

export default ModalOrdenes;
