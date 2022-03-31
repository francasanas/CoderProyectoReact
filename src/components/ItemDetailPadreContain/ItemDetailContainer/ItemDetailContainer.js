import {useEffect, useState} from 'react'
import { Container } from "@mui/material"
import pedirDatos  from '../../PedirDatos/pedirDatos'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()
    console.log(itemId);
    console.log(item);

    useEffect(() => {

        setLoading(true)

        pedirDatos() 
            .then((res) => {
                setItem(res.find((prod) => prod.id === Number(itemId)))
            })
            .finally(() =>{
                setLoading(false)
            })
        

    }, [itemId])


    return (
        <Container className="my-5">

            {
                loading
                ? <h2>Cargando...</h2>
                : <ItemDetail {...item}/> 
            }

            

        </Container>
    )

    
}

export default ItemDetailContainer