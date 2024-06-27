import React, { useEffect, useState } from "react";
import { Archivo, Equis } from "./assets/Figuras.jsx";
import {
  collection,
  getDocs,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase/firebase.js";
import Card from "./components/Card.jsx";
import img1 from "./assets/Yellow Shoe.png"
import img2 from "./assets/img2.png"

const App = () => {
  const [tareas, setTareas] = useState([
    { id: 1, descripcion: "Lavar la loza" },
  ]);
  const [imprimir, setImprimir] = useState();
  const [input, setInput] = useState("");
  const input1 = (evento) => {
    setInput(evento.target.value);
  };
  const [cambio, setCambio] = useState(false);

  const agregarTarea = () => {
    setTareas([
      ...tareas,
      { id: Math.floor(Math.random() * 1000), descripcion: input },
    ]);
    setInput("");
  };
  const eliminarTarea = (identificacion) => {
    const nuevasTareas = tareas.filter(
      (elemento) => elemento.id !== identificacion
    );
    setTareas(nuevasTareas);
  };
  const eliminarFirebase = async (id) => {
    await deleteDoc(doc(db, "productos", id));
    setCambio(!cambio);
  };

  const añadirFirebase = async () => {
    const docRef = await addDoc(collection(db, "productos"), {
      producto: input,
    });
    console.log("Document written with ID: ", docRef.id);
    setCambio(!cambio);
    setInput("");
  };

  const solicitud = async () => {
    const individual = await getDocs(collection(db, "productos"));
    const array = individual.docs.map((elemento) => ({
      datos: elemento.data(),
      id: elemento.id,
    }));
    setImprimir(array);
  };

  useEffect(() => {
    solicitud();
  }, [cambio]);

  return (
    <div>
      <div className="phone-1 flex justify-center items-center">
        <label className="input input-bordered flex items-center gap-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              agregarTarea();
            }}
          >
            <input
              onChange={input1}
              type="text"
              className="grow"
              placeholder="Ingrese la tarea"
              value={input}
            />
          </form>
        </label>
        <button onClick={agregarTarea} className="btn btn-success">
          Añadir tarea
        </button>
        <button onClick={añadirFirebase}>Añadir a firebase</button>
      </div>

      <div className="flex flex-col items-center justify-center">
        {tareas &&
          tareas.map((elemento) => (
            <div
              key={elemento.id}
              className="flex gap-10 border border-green-500 rounded-md w-fit px-3 py-2 mt-2 justify-center items-center"
            >
              <h1 className="text-[30px]">{elemento.descripcion}</h1>
              <button
                onClick={() => {
                  eliminarTarea(elemento.id);
                }}
                className="btn btn-circle btn-outline"
              >
                <Equis />
              </button>
            </div>
          ))}
      </div>
      {imprimir &&
        imprimir.map((elemento) => (
          <div key={elemento.id}>
            <h1 className="font-bold text-[40px]">{elemento.datos.producto}</h1>
            <button onClick={() => eliminarFirebase(elemento.id)}>
              Eliminar de firebase
            </button>
          </div>
        ))}

      <div className="flex justify-around flex-wrap">
        <Card img={img1} titulo={"Air Max 97"} precio={"20.99"} />
        <Card img={img2} titulo={"Air Presto"} precio={"25.99"} />
        <Card img={img2} titulo={"Air Presto"} />
        <Card img={img2} titulo={"Air Presto"} />
        <Card img={img2} titulo={"Air Presto"} />
        <Card img={img2} titulo={"Air Presto"} />
      </div>
    </div>
  );
};

export default App;
