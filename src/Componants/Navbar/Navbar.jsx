
import React, { useState } from 'react';
import { GoHome } from "react-icons/go";
import { CiMap } from "react-icons/ci";
import { FaCat } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdForest } from "react-icons/md";
import { FaWater } from "react-icons/fa";
import { GiLibertyWing } from "react-icons/gi";
import './Navbar.css';

function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
        
    };

    return (
        <div>
            <header className='header'>
                <nav className='navbar-menu'>
                    <a href="#"><GoHome />หน้าหลัก</a>
                    <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                        <a href="#" onClick={(e) => e.preventDefault()}><FaCat />ประเภทสัตว์</a>
                        {showDropdown && (
                            <div className="dropdown-content">
                                <a href="#"><MdForest />สัตว์บก</a>
                                <a href="#"><GiLibertyWing />สัตว์ปีก</a>
                                <a href="#"><FaWater />สัตว์น้ำ</a>
                            </div>
                        )}
                    </div>
                    <img className='logo' src="src/Componants/Assets/DusitLogo-removebg-preview.png" alt="logo" />
                    <a href="#"><CiMap />เเผนที่</a>
                    <a href="#" ><AiOutlineInfoCircle />About</a>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;
