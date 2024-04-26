import React from 'react'
import './Navbar.css'
function Navbar() {
    return (
        <div>
            <header className='header'>
                <nav className='navbar-menu'>
                    <a href="#">หน้าหลัก</a>
                    <a href="#">ประเภทสัตว์</a>
                    <img className='logo' src="src/Componants/Assets/DusitLogo-removebg-preview.png" alt="logo" />
                    <a href="#">เเผนที่</a>
                    <a href="#">About</a>
                </nav>
            </header>
        </div>
    )
}

export default Navbar