import React from "react"

function Mensaje ({id, emisor, hora, texto, status}) {
    return (
        <div>
            <p>{texto} {hora}</p>
        </div>
    )
}

export default Mensaje