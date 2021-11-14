import React from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import './ItemDetail.css'

const ItemDetail = ({item}) => {
    
    return (
         <Container style={{minHeight: '50vh', backgroundColor: '#fff'}} fluid>
            <Row>
                <Col sm='auto' md={6} > 
                    <div className="img-conent">
                        <img src={item.productUrl} alt={item.title} className="img-item"/>
                    </div>
                </Col>
                <Col sm='auto' md={6}>
                <div className="contenido">
                    <div className="title">
                        <h2>{item.title}</h2>
                    </div>
                    <div className="description">
                        <p><b>ID: </b>{item.id}</p>
                        <p>{item.details}</p>
                    </div>
                    <div className="tags">
                            {/*etiquetas.map((tag) => <li>{tag}</li>)*/}
                            <p><b>Etiquetas</b></p>
                            <p>{item.tags}</p>
                    </div>
                    <div className="category">
                        <p><b>Categoria</b></p>
                        <p>{item.category}</p>
                    </div>
                    <div className="colors">
                        <p><b>Colores</b></p>
                        <p>
                            {/*colores.map((color) => <li>{color}</li>)*/}
                            {item.colors}
                        </p>
                    </div>
                    <div className="price">
                        <p>
                            <p><b>Precio</b></p>
                            ${item.price}
                        </p>
                        <button className="btn addOn">Comprar</button>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetail;