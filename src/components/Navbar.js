import React from 'react'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='nav__text'>
                <div className='logo'>
                    <img src="/img/logo.png" alt='logo'/>
                </div>
                <ul className='nav_ul'>
                    <li>
                        <a href=''> HOME </a>
                        </li>
                        <li>
                        <a href=''> MENU</a>
                        </li>
                        <li>
                        <a href=''> ABOUT </a>
                        </li>
                        <li>
                        <a href=''> SHOP </a>
                        </li>
                        <li>
                        <a href=''> NEWS </a>
                        </li>
                        <li>
                        <a href=''> CONTACT </a>
                        </li>
                </ul>
            </div>
        </nav>
            

    )
}

export default Navbar
