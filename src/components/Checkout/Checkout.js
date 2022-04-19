import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { db } from '../../firebase/config'
import { getDocs, query, where, documentId, writeBatch, collection, addDoc, Timestamp} from 'firebase/firestore'
import { Link, Navigate  } from 'react-router-dom'


const Checkout = () => {

    const { cart, cartTotal, emptyCart } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [telef, setTelef] = useState('')

    const handleNombre = (e) => {
        setNombre(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleTelef = (e) => {
        setTelef(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const orden = {
            items: cart,
            total: cartTotal(),
            comprador: {
                nombre: nombre,
                email: email,
                tel: telef,
                fyh: Timestamp.fromDate(new Date())
            }
        }


        const batch = writeBatch(db)
        const ordersRef = collection(db, 'orders')
        const productosRef = collection(db, 'productos')
        const q = query(productosRef, where(documentId(), 'in', cart.map((item) => item.id)))

        const productos = await getDocs(q)

        const outOfStock = []

        productos.docs.forEach((doc) => {
            const itemInCart = cart.find((item) => item.id === doc.id)

            if (doc.data().stock >= itemInCart.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemInCart.cantidad
                })
            } else {
                outOfStock.push(itemInCart)
            }
        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(ordersRef, orden)
                        .then((doc) => {
                            setOrderId(doc.id)
                            emptyCart()
                        })
                })
        } else {
            alert('Hay productos sin stock')
        }

    }

    if(orderId){
        return <div className='container my-5'>
            <h2>Tu orden se registro con exito!!!</h2>
            <hr/>
            <h4>Guarda tu numero de orden: {orderId}</h4>
            <Link to='/' className='btn btn-primary'>Volver al inicio</Link>
        </div>
    }

    if(cart.lenght === 0){
        return <Navigate to ='/'/>
    }

    return (
        <div className='container my-5'>
            <h2>Checkout</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input
                    className='form-control my-2'
                    type={'text'}
                    placeholder= 'Tu nombre y apellido'
                    value={nombre}
                    onChange={handleNombre}
                />
                <input
                    className='form-control my-2'
                    type={'email'}
                    placeholder= 'Tu email'
                    value={email}
                    onChange={handleEmail}
                />
                <input
                    className='form-control my-2'
                    type={'tel'}
                    placeholder= 'Tu numero de telefono'
                    value={telef}
                    onChange={handleTelef}
                />
                <button className='btn btn-primary' type='submit'>Enviar</button>
            </form>            
        </div>
    )
}

export default Checkout



