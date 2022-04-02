import React from 'react'

const ItemCount = ({max, onAdd, cantidad, setCantidad}) => {

    const handleSumar = () => { 
        cantidad < max && setCantidad(cantidad + 1)
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }



    return (
        <div className='m-3'>
            <button className='btn btn-outline-primary m-2' onClick={handleRestar}>-</button>
            <span className='mx-2 p-1'>{cantidad}</span>
            <button className='btn btn-primary m-2' onClick={handleSumar}>+</button>
            <br/>
            <button className='btn btn-success my-2' onClick={onAdd}>Agregar al carrito</button>

        </div>
    )
}

export default ItemCount