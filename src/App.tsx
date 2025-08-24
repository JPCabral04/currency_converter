import { useEffect } from "react";
import api from "./api";
import "./App.css";
import ConverterForm from "./components/ConverterForm";

function App() {
  return (
    <>
      <h1>Conversor de Moedas</h1>
      <ConverterForm />
    </>
  );
}

export default App;
