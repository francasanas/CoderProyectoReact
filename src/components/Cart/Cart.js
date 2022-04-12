import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'

const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem } = useContext(CartContext)

    return (
        <div className='container my-5'>
            {
                cart.length === 0 ?
                <div>
                    <h2>Tu carrito esta vacio</h2>
                    <hr/>
                    <h5>Vuelve al shop para agregar</h5>
                    <Link to={'/'} className='btn btn-primary'>Volver</Link>
                </div>
                :
                <>
                        <h2>Tu Compra</h2>
                        <hr/>
                        {
                            cart.map((item) => (
                                <div key={item.id}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h4" component="div">
                                            <h4>{item.nombre}</h4>
                                        </Typography>
                                        <Typography gutterBottom variant="p" component="div">
                                            <p>Cantidad: {item.cantidad}</p>
                                        </Typography>
                                        <Typography className='' variant="body2 h5" color="text.secondary">
                                            <h5>Precio: ${item.precio * item.cantidad}</h5>
                                        </Typography>
                                        <button className='btn btn-danger' onClick={() => removeItem(item.id)}><DeleteIcon/></button>
                                        <hr/>
                                    </CardContent>
                                </div>
                            ))
                        }
                        <h3>TOTAL: ${cartTotal()}</h3>
                        <hr/>
                        <button className='btn btn-danger' onClick={emptyCart}>Vaciar Cart</button>
                        <button className='btn btn-success m-2'>Comprar</button>
                </>
            }
        </div>
    )
}

export default Cart