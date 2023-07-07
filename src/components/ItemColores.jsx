import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ItemColores = ({color}) => {
    return (
       <Card className='col-12 col-lg-3 col-sm-3 mt-3 shadow'>
        <Card.Header className='text-center'>{color.toString().toUpperCase()}</Card.Header>
        <Card.Body className='mColor my-3' style={{backgroundColor:color,width:"80px",height:"80px"}}></Card.Body>
        <Card.Footer className='d-flex justify-content-end'>
            <Button type='button' variant='danger' className='ms-auto shadow'>Borrar</Button>
            </Card.Footer>
       </Card>
    );
};

export default ItemColores;