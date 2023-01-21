import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
            <div>
                <h1>HEXA</h1>
            </div>
            <div className='nav-list'>
                <ul style={{display:"flex",listStyle:"none",gap:20}}>
                    <NavLink to="/" style={{textDecoration:"none"}}><li>Home</li></NavLink>
                    <NavLink to="/about" style={{textDecoration:"none"}}><li>About</li></NavLink>
                    <NavLink to="/blog" style={{textDecoration:"none"}}><li>Blogs</li></NavLink>
                    <NavLink to="/services" style={{textDecoration:"none"}}><li>Services</li></NavLink>
                    <NavLink to="/blog" style={{textDecoration:"none"}}><li>Blog</li></NavLink>
                    <NavLink to="/contact" style={{textDecoration:"none"}}><li>Contact</li></NavLink>
                </ul>
            </div>
            <div className='nav-btn'>
              <button style={{background:"#e74208",color:"white",border:"none",borderRadius:5,padding:"10px 20px"}}>COLORLIB</button>
            </div>
        </div>
    )
}

export default Navbar
