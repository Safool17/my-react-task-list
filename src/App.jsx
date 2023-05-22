import "./App.css";
import Header from "./components/Header";
import Listatarea from "./components/Listatarea";
import Clear from "./components/Clear";
import Contador from "./components/Contador";
import ListaTareas from "./components/Listatarea";

function App() {
  return (
    <div className="App">
      <div className="Tareas-principal">
        <Header />
        <ListaTareas />

        <Clear />
        <Contador />
      </div>
    </div>
  );
}

export default App;
