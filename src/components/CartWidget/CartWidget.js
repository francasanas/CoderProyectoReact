import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

    const {cartQuantity} = useContext(CartContext)

    return (
        <div>
            <div className='buttons'>
                <Link to='/Cart' className='btn btn-outline-dark ms-2'>
                    <i className="fa fa-shopping-cart me-1"></i><span>{cartQuantity() || ''}</span>
                </Link>
            </div>
        </div>
    )
}

export default CartWidget