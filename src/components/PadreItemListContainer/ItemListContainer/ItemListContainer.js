import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import pedirDatos  from '../../PedirDatos/pedirDatos'
import ItemList from '../ItemList/ItemList'
import { Link } from 'react-router-dom'

import './ItemListContainer.css'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    const {catId}= useParams()
    console.log(catId);


    useEffect( () => {
        setLoading(true)

        pedirDatos()
            .then((res) =>{

                if(catId){
                    setProductos( res.filter((prod) => prod.cat === catId) )
                }else{
                    setProductos( res)
                }
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [catId])

    return (
        <>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm ">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/Categorias/Hombre">Hombre</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Categorias/Mujer">Mujer</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Categorias/Accesorios">Accesorios</Link>
                    </li>
                </ul>
            </div>
            </nav>
            {
                loading
                    ?<h2>Cargando...</h2>
                    :<ItemList productos={productos}/>
            }
        

            
        </>
    )
}
        

export default ItemListContainer