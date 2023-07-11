import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { deleteColor, getColores } from './helpers/queries';

const ItemColores = ({color,setColores}) => {

    const borrarColor = () =>{
        deleteColor(color._id).then(res => {if(res && res.status === 200)console.log("color borrado")})
        getColores().then(res =>setColores(res))
    }
    return (
       <Card className='col-12 col-lg-3 col-sm-3 mt-3 shadow'>
        <Card.Header className='text-center'>{color.nombreColor.toString().toUpperCase()}</Card.Header>
        <Card.Body className='mColor my-3' style={{backgroundColor:color.nombreColor,width:"80px",height:"80px"}}></Card.Body>
        <Card.Footer className='d-flex justify-content-end'>
            <Button type='button' variant='danger' className='ms-auto shadow' onClick={borrarColor}>Borrar</Button>
            </Card.Footer>
       </Card>
    );
};

export default ItemColores;