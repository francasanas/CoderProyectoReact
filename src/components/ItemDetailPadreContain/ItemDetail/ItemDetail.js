import React, {useContext, useState} from "react"

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import ItemCount from '../../ItemCount/ItemCount'
import Select from '../../Select/Select'
import { CartContext } from "../../../context/CartContext";
import { Link } from 'react-router-dom';


const options = [
    {value: 'large', text: 'Large'},
    {value: 'medium', text: 'Medium'},
    {value: 'small', text: 'Small'}
]


const ItemDetail = ({id,nombre, precio,img, desc, cat, stock}) => {

    const {addItem, isInCart} = useContext(CartContext)

    const navigate = useNavigate()

    const handleNavigate = () => {
            navigate(-1)
    }

    const [cantidad, setCantidad] = useState(1)
    const [medida, setMedida] = useState('large')
    console.log(medida);

    const agregarAlCarrito = () => {
        const itemToAdd = {
            id,
            nombre,
            precio,
            img,
            desc,
            medida,
            cat,
            cantidad
        }
        addItem(itemToAdd);
    }

    return (
        <>
            <Card style={{margin:50}} sx={{ maxWidth: 500 }}>
        <CardMedia
            component="img"
            height="450"
            image={img}
            alt="imagen"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {nombre}
            </Typography>
            <Typography className='p-1' variant="body2 h5" color="text.secondary">
            ${precio}
            </Typography>
            <Typography className='p-1' variant="body2" color="text.secondary">
            {cat}
            </Typography>
            <Typography className='p-1' variant="body2" color="text.secondary">
            Cantidad de Stock = {stock}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {desc}
            </Typography>
            <Select
                option = {options}
                onSelect = {setMedida}
            />

            {
                !isInCart(id)
                    ?<ItemCount
                        max={stock}
                        onAdd={agregarAlCarrito}
                        cantidad= {cantidad}
                        setCantidad={setCantidad}
                    />
                    : <Link to='/Cart' className='btn btn-success  m-3 d-block my-3'>Terminar mi Compra</Link>
            }
            

            

            <hr/>
            <button className='btn btn-outline-primary' onClick={ handleNavigate}>Volver</button>
            
        </CardContent>
        </Card>
        </>
    )
}



export default ItemDetail 
