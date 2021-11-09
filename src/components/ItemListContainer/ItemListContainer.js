import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './itemlistcontainer.css';
import ItemCount from "../IItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

const items = [
    {id:1, title:'chamarra', price:50, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg'},
    {id:2, title:'chamarra 2', price:52, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg'},
    {id:3, title:'chamarra 3', price:53, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg'},
    {id:4, title:'chamarra 4', price:54, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg'},
    {id:5, title:'chamarra 5', price:54, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg'},
    {id:6, title:'chamarra 6', price:56, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg'}
  ];
  

const ItemListContainer = ({getting}) =>{
    return(
        <>
        <Container fluid className="listContainer">
            <Row>
                <Col>
                    <h3>{getting}</h3>
                    
                </Col>
                <Col>
                    <ItemCount stock={10} initial={1}/>
                </Col>
            </Row>
            
        </Container>
        <Container>
        <Row>
                <Col>
                    <ItemList items={items}/>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default ItemListContainer;