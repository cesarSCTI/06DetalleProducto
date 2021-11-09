import React from 'react'
import { useState } from 'react';
import { Card } from 'react-bootstrap';

const product = [
    {id:1, title:'chamarra', price:55, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg'},
    {id:2, title:'chamarra 2', price:55, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg'}
];



const Item = ({item}) => {
    const [product, setproduct] = useState([])
    
    const getFetch = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(item)
        }, 3000)
        
    });
    
    getFetch
    .then(res => setproduct(res))
    .catch(err => console.log(err))
    .finally(() => console.log('tarea finalizada'))

    return (
        <div>
            <Card style={{ width: '18rem', margin:'10px' }}>
                <Card.Img variant="top" src={product.productUrl} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                    ${product.price}
                    </Card.Text>
                    <button className="btn addOn">Comprar</button>
                </Card.Body>
                </Card>
        </div>
    )
}

export default Item
