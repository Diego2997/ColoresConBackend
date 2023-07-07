import { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import ContenedorColores from "./ContenedorColores";

const FormularioColores = () => {
    const [color,setColor] = useState("")
    const [colores,setColores] = useState([])

    const handleSubmit= (e) =>{
        e.preventDefault()
        setColores([...colores,color])
        setColor("")
    }
  return (
<>  
  <Form className="container mt-5" onSubmit={handleSubmit}>
      <Card>
        <h2 className="py-2">Administrar Colores</h2>
        <Card.Body className="bg-card py-5">
        <Form.Group className="mb-3 d-flex " controlId="color">
        <div className="color "></div>
    <Form.Control
     type="text"
      className="ms-4"
       placeholder="Ingresa un color. Por ej: blue"
        value={color} onChange={(e)=>setColor(e.target.value)}/>
      </Form.Group>
        </Card.Body>
        <Card.Footer className="ms-auto py-3">
            <Button variant="primary" className="ms-auto shadow" type="submit">
        Guardar
      </Button>
      </Card.Footer>
      </Card>
    </Form>
    <ContenedorColores colores={colores}/>
</>
  );
};

export default FormularioColores;
