import React from "react";

function Mensaje({ id, emisor, hora, texto, status }) {
    return (
        <div>
            <p>
                {texto} de {emisor} <br />
                <span>{hora}</span>
            </p>
        </div>
    );
}

export default Mensaje;
