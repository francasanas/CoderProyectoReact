import {useEffect, useState} from 'react'
import { Container } from "@mui/material"
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { db } from '../../../firebase/config'
import { doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()
    console.log(itemId);
    console.log(item);

    useEffect(() => {

        setLoading(true)

        const docRef = doc(db, 'productos', itemId) 
        getDoc(docRef)
            .then(doc =>{
                const prod = {id : doc.id, ...doc.data()}
                setItem(prod)
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