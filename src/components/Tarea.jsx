import { ListGroup, Button } from "react-bootstrap";
import { XCircle } from "react-bootstrap-icons";

const Tarea = ({ nombreTarea, eliminarTarea }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {nombreTarea}
      <i className="bi bi-x-circle-fill"></i>
      <Button
        variant="outline-danger"
        onClick={() => eliminarTarea(nombreTarea)}
      >
        <XCircle />
      </Button>
    </ListGroup.Item>
  );
};

export default Tarea;
