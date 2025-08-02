import React from "react"
import Mensaje from "../Mensaje/Mensaje"
// import dataMensajes from "../../data/mensajes"

const ListaDeMensajes = ({ mensajes, deleteMensajePorId }) => {

    if ( mensajes.length === 0) {
        return (
            <span>Aun no hay mensajes</span>
        )
    } else {
        const mensajesRenderizados = mensajes.map((data) => {
            return (
                <Mensaje
                    key={data.id}
                    id={data.id}
                    emisor={data.emisor}
                    texto={data.texto}
                    hora={data.hora}
                    deleteMensajePorId={deleteMensajePorId}
                />
            )
        })
        return (
            <div>
                {mensajesRenderizados}
            </div>
        )
    }
};

export default ListaDeMensajes;
