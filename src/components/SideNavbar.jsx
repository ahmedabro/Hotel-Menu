import { Container, Nav } from 'react-bootstrap'
import {FaBarsStaggered, FaXmark, FaHouse, FaUtensils, FaHeart, FaShuffle, FaUser} from 'react-icons/fa6'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

const SideNavbar = () => {
    const [drawerOpened, setDrawerOpened] = useState(false);

  return (
    <>
        <Container className='button-container'>
            <div className='logo'>
                <Link to='/'><h3>logo<span>.</span></h3></Link>
            </div>
            <button className="drawer-btn" onClick={(e) => setDrawerOpened(true)}>
                <FaBarsStaggered />
            </button>
        </Container>

        <Nav className={drawerOpened ? 'sidebar opened' : 'sidebar'}>
            <button className='close-btn' onClick={(e) => setDrawerOpened(false)}><FaXmark /></button>
            <ul className='menu-list'>
                <li>
                    <NavLink to='/'><FaHouse />Home</NavLink>
                </li>
                <li>
                    <NavLink to='/menu'><FaUtensils />Menu</NavLink>
                </li>
                <li>
                    <NavLink to='/favorites'><FaHeart />My Favorites</NavLink>
                </li>
                <li>
                    <NavLink to='/random-meal'><FaShuffle />Random Meal</NavLink>
                </li>
                <li>
                    <NavLink to='/about'><FaUser />About Me</NavLink>
                </li>
            </ul>
        </Nav>
    </>
  )
}

export default SideNavbar
