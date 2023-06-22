import { useState } from "react";
import { ListaDeTareas } from "./Components/ListaDeTareas";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card-to-do">
        <h1>Lista de tareas</h1>
        <div className="counter-todos">
          <h3>N° Tareas: 4</h3>
          <h3>Pendientes: 3</h3>
        </div>
        <div className="add-todo">
          <h3>Agregar Tarea</h3>
          <TodoAdd />
        </div>
      </div>
    </>
  );
}

export default App;
