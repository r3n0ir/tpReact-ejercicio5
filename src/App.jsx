import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import FormTarea from "./components/Formtareas";

function App() {
  return (
    <>
      <Container className="my-5 mainPage">
        <section className="text-light">
          <h1 className="display-4 text-center">Lista de tareas</h1>
          <hr />
          <FormTarea></FormTarea>
        </section>
      </Container>
      <footer className="bg-dark-subtle text-light text-center py-4">
        &copy; Todos los derechos reservados
      </footer>
    </>
  );
}

export default App;
