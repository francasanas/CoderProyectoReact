import React from "react"

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import ItemCount from "../../ItemCount/ItemCount";




const ItemDetail = ({nombre, precio,img, desc, cat, stock}) => {

    const navigate = useNavigate()

    const handleNavigate = () => {
            navigate(-1)
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
            <ItemCount stock={stock} valorInicial={1}/>
            <hr/>
            <button className='btn btn-outline-primary' onClick={ handleNavigate}>Volver</button>
            
        </CardContent>
        </Card>
        </>
    )
}



export default ItemDetail 

