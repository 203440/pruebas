import React from 'react';
import SideBar from './sidebar';
import { useNavigate } from 'react-router-dom';
import img1 from '../assets/img1.png';
import map1 from '../assets/map 1.png';

function Informe(){
    const navigate = useNavigate(); 
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
            <div style={{ marginTop: '3%', marginLeft: '15%'}}>
                <h2> Informe de </h2>
            </div>
            <div style={{display:'flex', marginBottom:'2%'}}>
                <div className='tablas'>
                    <table className='tablas'>
                        <thead>
                            <tr>
                                <th>Dias de Más Ingresos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td>Lunes</td>
                            </tr>
                            <tr >
                                <td>Jueves</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='img1'>
                    <img src={img1} alt="Img1" />
                </div>
            </div>
            <div style={{display:'flex', marginBottom:'2%'}}>
                <div className='tablas'>
                    <table className='tablasg2'>
                        <thead>
                            <tr>
                            <th>Nombre de la Pagina/ Sección</th>
                            <th>Cant. Vistas</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td>Menu</td>
                                <td>4</td>
                            </tr>
                            <tr >
                            <td>Favoritos</td>
                            <td>2</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div style={{display:'flex', marginBottom:'2%'}}>
                <div className='tablas'>
                    <table className='tablas'>
                        <thead>
                            <tr>
                                <th>Sexo de mayor visita</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td>Femenino</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div style={{display:'flex', marginBottom:'2%'}}>
                <div className='tablas'>
                    <table className='tablas'>
                        <thead>
                            <tr>
                                <th>Usuarios por país</th>
                                <th>Cant</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td>México</td>
                                <td>50</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='img1'>
                    <img src={map1} alt="map1" />
                </div>
            </div>
            <div style={{display:'flex', marginBottom:'2%'}}>
                <div className='tablas'>
                    <table className='tablasg2'>
                        <thead>
                            <tr>
                                <th>Elementos con más clicks</th>
                                <th>Clicks</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td>Pastel</td>
                                <td>34</td>
                            </tr>
                            <tr >
                            <td>Inicio</td>
                            <td>22</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Informe;