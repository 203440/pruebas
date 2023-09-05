import React from 'react';
import SideBar from './sidebar';
import { useNavigate } from 'react-router-dom';

function Principal(){
    const navigate = useNavigate(); // Debe estar al nivel principal de tu componente

    const handleLoginClick = () => {
        // Suponiendo que tu lógica de inicio de sesión es exitosa, redirige al usuario:
        navigate('/inicio');
    };
    return (
        <div>
            <div className='head'>
                <br/>
                <div className='centrar'><h1>Web <br/>Craft</h1>
                <nav style={{marginLeft: '80%'}}>
                    <a href="#home" onClick={handleLoginClick} style={{marginLeft: '5%'}}>Inicio</a>
                    <a href="#config" style={{marginLeft: '10%'}}>Mi Cuenta</a>
                </nav>
                </div>
            </div>
            <SideBar/> 
            <div className='wel' style={{ marginTop: '50px' }}>
                <h3> Paginas registradas</h3>
            </div>   
            <div className='wel' style={{ marginTop: '50px' }}>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td>Google</td>
                        </tr>
                        <tr >
                            <td>Otro</td>
                        </tr>
                        <tr >
                            <td>Nuevo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Principal;