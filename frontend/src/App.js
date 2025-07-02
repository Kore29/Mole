import "./styles.css";
import Lista from "./components/Lista";

const comidas = [
    { id: 1, name: "Pizza" },
    { id: 2, name: "Hamburguesa" },
    { id: 3, name: "Ensalada" },
    { id: 4, name: "Sushi" },
    { id: 5, name: "Tacos" },
    { id: 6, name: "Pasta" },
    { id: 7, name: "Paella" },
    { id: 8, name: "Empanada" },
    { id: 9, name: "Arepa" },
    { id: 10, name: "Ceviche" },
];

function App() {
  return (
    <div>
      <h1>Lista de la Compra</h1>
      <Lista items={comidas} />
    </div>
  );
}

export default App;
