import React from 'react'
import './ItemCount.css'
import Button from '@mui/material/Button';


const ItemCount = (props, onClick) => {

    const [counter, setCounter] = React.useState(1);

    const handlerCounterUp = () => {
        if (counter < props.stock) {
            setCounter(counter + 1);
        }

    }
    const handlerCounterDown = () => {
        if (counter > props.valorInicial){
            setCounter(counter - 1);
        }
    }

    return (
        <div className='ItemCount'>
            <p>{counter}</p>
            <button onClick={handlerCounterDown}>➖</button> <button onClick={handlerCounterUp}>➕</button>
            <div className='botonAñadirCarrito'>
                <Button variant="outlined">Añadir al carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount;