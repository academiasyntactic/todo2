import React, { useState } from "react";

const App = () => {
  const [tareas, setTareas] = useState([
    { id: 1, descripcion: "Lavar la loza" },
  ]);
  const [input, setInput] = useState(null);
  const input1 = (evento) => {
    setInput(evento.target.value);
  };

  const agregarTarea = () => {
    setTareas([
      ...tareas,
      { id: Math.floor(Math.random() * 1000), descripcion: input },
    ]);
  };

  return (
    <div>
      <div className="phone-1 flex">
        <label className="input input-bordered flex items-center gap-2">
          <input
            onChange={input1}
            type="text"
            className="grow"
            placeholder="Ingrese la tarea"
          />
        </label>
        <button onClick={agregarTarea} className="btn btn-success">
          Añadir tarea
        </button>
      </div>

      {tareas &&
        tareas.map((elemento) => (
          <div key={elemento.id} className="flex gap-10">
            <h1 className="text-[30px]">{elemento.descripcion}</h1>
            <button className="btn btn-circle btn-outline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ))}
    </div>
  );
};

export default App;
