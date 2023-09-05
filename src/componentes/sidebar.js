import React, { useState } from 'react';
import '../sidebar.css';
import { useNavigate } from 'react-router-dom';


function SideBar() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/usuario');
    };
    const handleLoginClick2 = () => {
        navigate('/inicio');
    };
    const handleLoginClick3 = () => {
        navigate('/informe');
    };

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
            <button className="toggle-button" onClick={toggleMenu}>☰</button>
            <nav className="menu">
                <a href="#home" onClick={handleLoginClick2}><i className="fas fa-home fa-2x"/></a>
                <a href="#informe" onClick={handleLoginClick3}><i className="fas fa-file fa-2x"/></a>
                <a href="#config" onClick={handleLoginClick}><i className="fas fa-cogs fa-2x"/></a>
            </nav>
        </div>
    );
}

export default SideBar;
// <a href="#informe">Informe</a>