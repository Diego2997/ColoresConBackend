import { useEffect, useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import ContenedorColores from "./ContenedorColores";
import { getColores, postColores } from "./helpers/queries";

const FormularioColores = () => {
    const [nombreColor,setNombreColor] = useState("")
    const [colores,setColores] = useState([])

    useEffect(()=>{
    getColores().then(res => setColores(res)).catch(error => console.log(error))
    },[])


    

    const handleSubmit= (e) =>{
        e.preventDefault()
        // setColores([...colores,nombreColor])
        postColores(nombreColor).then(res => {
          if(res && res.status === 201)console.log("color creado")
          setColores([...colores,{nombreColor}])
        }).catch(error => console.log(error.message))
    }
  return (
<>  
  <Form className="container mt-5" onSubmit={handleSubmit}>
      <Card>
        <h2 className="py-2">Administrar Colores</h2>
        <Card.Body className="bg-card py-5">
        <Form.Group className="mb-3 d-flex " controlId="nombreColor">
        <div className="color "></div>
    <Form.Control
     type="text"
      className="ms-4"
       placeholder="Ingresa un color. Por ej: blue"
        value={nombreColor} onChange={(e)=>setNombreColor(e.target.value)}/>
      </Form.Group>
        </Card.Body>
        <Card.Footer className="ms-auto py-3">
            <Button variant="primary" className="ms-auto shadow" type="submit">
        Guardar
      </Button>
      </Card.Footer>
      </Card>
    </Form>
    <ContenedorColores colores={colores} setColores={setColores}/>
</>
  );
};

export default FormularioColores;
