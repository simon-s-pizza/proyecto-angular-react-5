import React from "react";

const formacion = [
  {
    institucion: "Instituto Técnico ",
    curso: "Técnico en Desarrollo Web",
    año: "2023",
  },
  {
    institucion: "Plataforma Cursos Online",
    curso: "React: fundamentos y hooks",
    año: "2024",
  },
  {
    institucion: "Bootcamp Frontend",
    curso: "CSS avanzado y accesibilidad",
    año: "2022",
  },
  {
    institucion: "Talleres Locales",
    curso: "Git y control de versiones",
    año: "2021",
  },
];

export default function Educacion() {
  return (
    <section className="educacion">
      <h3>Formación</h3>
      <ul>
        {formacion.map((f, i) => (
          <li key={i}>
            <strong>{f.institucion}</strong> — {f.curso} ({f.año})
          </li>
        ))}
      </ul>
    </section>
  );
}
