import React from 'react';
import {NavLink} from 'react-router-dom';


const Home = () => (
    <div className='container px-3'>
        {/* refering to bootstrap release notes on jumbotron being removed in BS v.5 */}
        <div className='p-5 mb-4 text-bg-white rounded-3'>
            <div className='container-fluid py-5'>
                <h1 className='diaplay-5 fw-bold'>Welcome</h1>
                <p className='col-md-8 fs-4'>Here is where I will be displaying all of my
                projects, hobbies and experiments. Hopefully you will learn something new.</p>
                <button className='btn btn-primary btn-lg' type='button'>
                    <NavLink exact to='/blog' className="nav-link" href="#">Learn more</NavLink>
                </button>
            </div>
        </div>
    </div>
);
export default Home;