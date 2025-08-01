import React from "react";

function Mensaje({ id, emisor, hora, texto, status, deleteMensajePorId }) {
    return (
        <div>
            <p>
                {texto} de {emisor} <br />
                <span>{hora} </span>
                <button onClick={ () => deleteMensajePorId(id)}>Eliminar</button>
            </p>
        </div>
    );
}

export default Mensaje;
