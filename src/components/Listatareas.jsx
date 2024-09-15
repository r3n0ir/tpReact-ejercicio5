/*
import { ListGroup } from "react-bootstrap";
import Tarea from "./Tarea";

const ListaTarea = ({ listaTareas, eliminarTarea }) => {
  return (
    <ListGroup>
      {listaTareas.map((tarea, index) => (
        <Tarea
          key={index}
          nombreTarea={tarea}
          eliminarTarea={eliminarTarea}
        ></Tarea>
      ))}
    </ListGroup>
  );
};

export default ListaTarea;
*/
import { ListGroup } from "react-bootstrap";
import Tarea from "./Tarea";

const ListaTarea = ({ listaTareas = [], eliminarTarea }) => {
  return (
    <ListGroup>
      {listaTareas.map((tarea, index) => (
        <Tarea
          key={index}
          nombreTarea={tarea}
          eliminarTarea={eliminarTarea}
        ></Tarea>
      ))}
    </ListGroup>
  );
};

export default ListaTarea;
