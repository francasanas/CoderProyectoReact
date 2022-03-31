import React from 'react'
import './Item.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const Item = ({id, nombre, precio,img, desc, cat, stock}) => {
    return (
        <>
            <Card style={{margin:50}} sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            height="300"
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
            <Link to={`/detail/${id}`}><Button className='p-2 '>+ info</Button></Link>

        </CardContent>
        </Card>
        </>
    )
}

export default Item