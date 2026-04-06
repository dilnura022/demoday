import React from 'react'
import { PiBellBold } from 'react-icons/pi'
import { Link, useNavigate } from 'react-router-dom'
import Basket from '../page/Basket'

function Navbar() {
    const navigate = useNavigate();
    return (
        <div className='container'>
            <div className='nav'>
                <h1 className='logo'>LOGO</h1>

                <input
                    className='input'
                    type="search"
                    placeholder='Search Items, Fashion, Collection and Users'
                />

                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/explore">Explore</Link></li>
                    <li><Link to="/collection">Personal Collection</Link></li>
                    <li><Link to="/drops">Drops</Link></li>
                    <li><Link to="/more">More</Link></li>


                    <PiBellBold style={{ color: 'white', width: "30px", height: "30px" }} />
                </ul>

                <button className='wallet' onClick={() => navigate("/basket")}>
                    basket
                </button>
            </div>
        </div>
    )
}

export default Navbar