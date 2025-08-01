import React from "react";
import Mensaje from "../Mensaje/Mensaje";
// import dataMensajes from "../../data/mensajes";

const ListaDeMensajes = ({ mensajes, deleteMensajePorId }) => {
    const mensajeRenderizados = mensajes.map((data) => {
        return (
            <Mensaje
                key={data.id}
                id={data.id}
                emisor={data.emisor}
                texto={data.texto}
                hora={data.hora}
                deleteMensajePorId={deleteMensajePorId}
            />
        );
    });

    return <div>{mensajeRenderizados}</div>;
};

export default ListaDeMensajes;
