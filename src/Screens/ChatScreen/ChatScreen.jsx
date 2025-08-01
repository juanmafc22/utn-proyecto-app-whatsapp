import React from "react";
import { useState } from "react";
import ListaDeMensajes from "../../Components/ListaMensajes/ListaMensajes";
import dataMensajes from "../../data/mensajes";

const ChatScreen = () => {

    const [mensajes, setMensajes] = useState(dataMensajes);

    // función para eliminar un mensaje
    const deleteMensajePorId = (mensajeId) => {

        const nuevaListaMensajes = []

        for (const mensaje of mensajes) {
            if (mensaje.id !== mensajeId ){
                nuevaListaMensajes.push(mensaje)
            }
        }

        setMensajes(nuevaListaMensajes)
    }

    return (
        <div>
            {/* <button onClick={ () => deleteMensajePorId(1)}>Eliminar primer mensaje</button> */}
            <ListaDeMensajes mensajes={mensajes} deleteMensajePorId={deleteMensajePorId} />
        </div>
    )
};

export default ChatScreen;
