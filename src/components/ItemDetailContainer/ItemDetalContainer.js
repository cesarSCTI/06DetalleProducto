import React from 'react';
import {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetails/ItemDetail'

const productoArray = {id:1, 
    title:'chamarra para invierno', 
    price:500, 
    productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg',
    category:'Ropa de invierno',
    tags: 'hombre, rebajas, invierno',
    colors: 'Negra, Blanca, Azul',
    details:'La sensación más acogedora. Nuestra chamarra de denim con lavado suave se renueva para el frío con un acogedor forro de tela de rizo para abrigarte toda la temporada.'
    };


const ItemDetailContainer = () => {
    
    const [product, setproduct] = useState({});

    
    const getItem = new Promise((resolve, reject) =>{
        if (true) {
            setTimeout(() => {
                resolve(productoArray)
            }, 2000)
        }
        else {
            reject('Error')
        }
    });

    useEffect(() => {
        getItem
        .then(resp => setproduct(resp))
        .catch(err => console.log(err))
        .finally('Tarea finalizada');
    })


    return (
        <>
            <ItemDetail item={product}/>
        </>
    )
}
export default ItemDetailContainer;