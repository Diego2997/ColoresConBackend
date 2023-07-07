import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ItemColores from './ItemColores';

const ContenedorColores = ({colores}) => {
    return (
        <Container>
            <Row>
                {colores.map((color,id) => <ItemColores key={id} color={color}/>)}
            </Row>
        </Container>
    );
};

export default ContenedorColores;