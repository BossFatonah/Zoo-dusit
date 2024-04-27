import { Link } from 'react-router-dom';
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
                    <Link to="/home"><GoHome />หน้าหลัก</Link>
                    <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                        <Link to="#" onClick={(e) => e.preventDefault()}><FaCat />ประเภทสัตว์</Link>
                        {showDropdown && (
                            <div className="dropdown-content">
                                <Link to="/landAnimals"><MdForest />สัตว์บก</Link>
                                <Link to="/poultry"><GiLibertyWing />สัตว์ปีก</Link>
                                <Link to="/aquaticAnimals"><FaWater />สัตว์น้ำ</Link>
                            </div>
                        )}
                    </div>
                    <img className='logo' src="src/Componants/Assets/DusitLogo-removebg-preview.png" alt="logo" />
                    <Link to="/map"><CiMap />เเผนที่</Link>
                    <Link to="/about" ><AiOutlineInfoCircle />About</Link>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;
