import React from 'react'
import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ( {productos} ) => {
    return (
        <>
            <div className='container'>
                {productos.map( (el) => <Item key={el.id} {...el}/>)}
            </div>
        </>
    )
}

export default ItemList