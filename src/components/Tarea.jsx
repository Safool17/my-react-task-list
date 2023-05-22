import React from "react";
import "./Estilos.css";
import basurero from "./imagenes/basurero.jpg";
import editar from "./imagenes/editar.jpg";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div
      className={
        completada ? "Tarea-contenedor completada" : "Tarea-contenedor"
      } /* un arreglo condicionado*/
    >
      <div className="Tarea-texto" onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div className="Lista">
        <img src={editar} />
        <img src={basurero} onClick={() => eliminarTarea(id)} />
      </div>
    </div>
  );
}

export default Tarea;
