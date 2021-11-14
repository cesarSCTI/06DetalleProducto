import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
const Cart = () => {
    return (
        <Container>
            <Row className="justify-content-md-center" style={{minHeight:'100vh', display:'flex', alignItems:'center'}}>
                <Col >
                <p><b>Bienvenido a tu carrito </b></p>
                    <hr></hr>
                <p>Aqui podras ver el regisro de todos los articulos que comiences a añadir</p>
                </Col>
            </Row>
            </Container>
    )
}

export default Cart;