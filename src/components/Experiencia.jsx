import React from "react";

const experiencias = [
  {
    cargo: "Desarrollador Front-End (Prácticas)",
    empresa: "Agencia Web X",
    año: "2024",
    descripcion:
      "Desarrollo de componentes reutilizables en React y mejora de la accesibilidad.",
  },
  {
    cargo: "Frontend Junior (Proyecto)",
    empresa: "Proyecto Personal - Tienda Demo",
    año: "2023",
    descripcion:
      "Implementé la UI usando React + Vite, integración con API mock y despliegue.",
  },
  {
    cargo: "Soporte Técnico",
    empresa: "Empresa Y",
    año: "2022",
    descripcion:
      "Atención a clientes, resolución de incidencias y documentación técnica.",
  },
  {
    cargo: "Voluntario - Sitio Web",
    empresa: "Empresa Z",
    año: "2021",
    descripcion:
      "Rediseño de sitio estático, optimización de performance y SEO básico.",
  },
];

export default function Experiencia() {
  return (
    <section className="experiencia">
      <h3>Experiencia</h3>
      {experiencias.map((e, i) => (
        <article key={i} className="exp-item">
          <h4>
            {e.cargo} — {e.empresa}
          </h4>
          <span>{e.año}</span>
          <p>{e.descripcion}</p>
        </article>
      ))}
    </section>
  );
}
