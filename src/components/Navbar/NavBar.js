import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';
import { Link } from 'react-router-dom';



const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm ">
                <div className="container">
                    <Link className="navbar-brand fw-bold fs-4" to="/Inicio">MyCommerce</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Productos">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contacto">Contact</Link>
                            </li>
                        </ul>
                        <div className='buttons'>
                            <CartWidget/>
                        </div>
                    </div>
                </div>
            </nav>
        </div>  
    )
}

export default NavBar