import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { PlusCircle } from "react-bootstrap-icons";
//import TaskList from "./TaskList";
import ListaTarea from "./Listatareas";

const FormTarea = () => {
  let tareasLocalStorage = JSON.parse(localStorage.getItem("taskList")) || [];
  const [listaTareas, setListaTareas] = useState(tareasLocalStorage);
  const [tarea, setTarea] = useState("");

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(listaTareas));
  }, [listaTareas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setListaTareas([...listaTareas, tarea]);
    setTarea("");
  };

  const eliminarTarea = (nombreTarea) => {
    let _listaTareas = listaTareas.filter((item) => {
      return item !== nombreTarea;
    });
    setListaTareas(_listaTareas);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            onChange={(e) => setTarea(e.target.value.trimStart())}
            value={tarea}
          />
          <Button variant="primary" type="submit">
            <PlusCircle />
          </Button>
        </Form.Group>
      </Form>
      <ListaTarea
        listaTareas={listaTareas}
        eliminarTarea={eliminarTarea}
      ></ListaTarea>
    </div>
  );
};

export default FormTarea;
