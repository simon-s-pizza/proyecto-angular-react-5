import React from "react";
import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";
import "./index.css";

export default function App() {
  return (
    <div className="app-container">
      <CabeceraCV />
      <main className="main-content">
        <Perfil />
        <Experiencia />
        <Educacion />
      </main>
    </div>
  );
}
