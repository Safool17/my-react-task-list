import React, { useState } from "react";
import "./Estilos.css";
import { v4 as uuidv4 } from "uuid";

function TareaFormulario(props) {
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    const TareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };

    props.onSubmit(TareaNueva);
  };

  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        className="Tarea-input"
        type="Text"
        placeholder="Escribe una Tarea"
        name="Texto"
        onChange={manejarCambio}
      />
      <button className="Tarea-boton">Agregar Tarea</button>
    </form>
  );
}

export default TareaFormulario;
