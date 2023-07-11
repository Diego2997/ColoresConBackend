import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ItemColores from './ItemColores';

const ContenedorColores = ({colores,setColores}) => {
    return (
        <Container>
            <Row>
                {colores.map((color,i) => <ItemColores key={i} color={color} setColores={setColores}/>)}
            </Row>
        </Container>
    );
};

export default ContenedorColores;