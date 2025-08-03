import React from "react";

const ContactItem = ({ contacto }) => {
    return (
        <div>
            <h2>{contacto.nombre}</h2>
            <img src={contacto.avatar} alt={contacto.nombre} style={{ width: 50, height: 50, borderRadius: '50%'}} />
            <span>{contacto.descripcion}</span>
            <span>{contacto.ultimaConeccion}</span>
            <span>{contacto.statusConeccion}</span>
        </div>
    )
};

export default ContactItem;
