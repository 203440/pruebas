import React, { useState } from 'react';
import '../index2.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Login(){
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    //const history = useNavigate();
    const navigate = useNavigate(); // Debe estar al nivel principal de tu componente

    const handleLoginClick = () => {
        // Suponiendo que tu lógica de inicio de sesión es exitosa, redirige al usuario:
        navigate('/inicio');
    };


    return(
        <div className='fondo'>
            <div className='contenedor'>
                <div className='cuadro'>
                    <div className='wel'>
                        <h1 className='txte'>Bienvenido</h1>
                    </div>
                    <div className='divlogin'>
                        <div className='contenido'>
                            <p className='txte'>Correo Electronico</p>
                            <input type="text" placeholder="Correo Elctronico" className='miInput'/>
                            <p className='txte'>Contraseña</p>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <input type={showPassword ? "text" : "password"} placeholder="Contraseña" className='miInput'/>
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} onClick={togglePasswordVisibility} style={{cursor: 'pointer', marginLeft: '10px', color:'white'}}/>
                            </div>
                        </div>
                    </div>
                    <div className='wel'>
                        <button type="button" className='miBoton' onClick={handleLoginClick}>Iniciar Sesión</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;