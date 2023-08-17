import React from "react";
import './Card.css'


const Card = ({estudiante}) => {
    return <div className='card'>
                <h3 className='card-title'>Se registro el estudiante:</h3>
                <div className='card-content'>
                <p>Nombre: {estudiante.nombre}</p>
                <p>Apellido: {estudiante.apellido}</p>
                </div>
            </div>;
};


export default Card;