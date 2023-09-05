import React from 'react';
import SideBar from './sidebar';
import { useNavigate } from 'react-router-dom';


function Usuarios() {
    const navigate = useNavigate(); // Debe estar al nivel principal de tu componente

    const handleLoginClick = () => {
        // Suponiendo que tu lógica de inicio de sesión es exitosa, redirige al usuario:
        navigate('/inicio');
    };
    return (
        <div>
            <div className='head'>
                <br />
                <div className='centrar'><h1>Web <br />Craft</h1> 
                <nav style={{marginLeft: '80%'}}>
                    <a href="#home" onClick={handleLoginClick} style={{marginLeft: '5%'}}>Inicio</a>
                    <a href="#config" style={{marginLeft: '10%'}}>Mi Cuenta</a>
                </nav>
                </div>
            </div>
            <SideBar />
            <div className='wel' style={{ marginTop: '50px' }}>
                <h3> Agregar Usuario Nuevo</h3>
            </div>
            <div className='wel'>
                <div className='wel2'>
                    <div className='form-container'>
                        <div className="input-group">
                            <label for="username">Usuario:</label>
                            <input type="text" id="username" name="username" placeholder="Ingrese su usuario..." />
                        </div>
                        <div className="input-group">
                            <label for="password">Contraseña:</label>
                            <input type="password" id="password" name="password" placeholder="Ingrese su contraseña..." />
                        </div>
                        <div className="input-group">
                            <label for="confirmPassword">Confirmar Contraseña:</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirme su contraseña..." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Usuarios;