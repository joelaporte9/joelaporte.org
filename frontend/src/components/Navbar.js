import React from 'react';
import {Link, NavLink} from 'react-router-dom';


const Navbar = () => (
    <nav className="navbar navbar-expand-lg text-light bg-dark">
        <div className="container-fluid">
        <Link to='/'className="navbar-brand text-light" href="#">Joe Laporte</Link>
        <button 
            className="navbar-toggler" type="button" 
            data-bs-toggle="collapse" data-bs-target="#navbarNav" 
            aria-controls="navbarNav" aria-expanded="false" 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink exact to='/' className="nav-link active text-light" aria-current="page" href="#">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to='/blog' className="nav-link text-light" href="#">Blog/Tutorials</NavLink>
                </li>  
            </ul>
        </div>
        </div>
    </nav>
);
export default Navbar;