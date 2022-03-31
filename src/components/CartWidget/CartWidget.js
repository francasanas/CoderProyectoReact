import React from 'react'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    return (
        <div>
            <div className='buttons'>
                <Link to='/Cart' className='btn btn-outline-dark ms-2'>
                    <i className="fa fa-shopping-cart me-1"></i>Cart (0)
                </Link>
            </div>
        </div>
    )
}

export default CartWidget