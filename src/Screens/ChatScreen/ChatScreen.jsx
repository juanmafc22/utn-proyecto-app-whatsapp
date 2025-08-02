import React from "react";
import { useState } from "react";
import ListaDeMensajes from "../../Components/ListaMensajes/ListaMensajes";
import dataMensajes from "../../data/mensajes";
import FormularioNuevoMensaje from "../../Components/FormularioNuevoMensaje/FormularioNuevoMensaje";

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

    // función para borrar todos los mensajes
    const deleteTodosLosMensajes = () => {
        setMensajes( [] )
    }

    // función para agregar un nuevo mensaje
    const agregarNuevoMensaje = (textoRecibido) => {

        const ahora = new Date();
        const horas = ahora.getHours().toString().padStart(2, '0')
        const minutos = ahora.getMinutes().toString().padStart(2, '0')
        const horaActual = `${horas}:${minutos}`

        // creo que nuevo mensaje, un objeto
        // este nuevo mensaje lo tengo que agregar a la lista de mensajes
        const nuevoMensaje = {
            id: mensajes.length + 1,
            emisor: 'YO',
            hora: horaActual,
            texto: textoRecibido,
            status: 'no visto'
        }

        // clono la lista de mensajes, y luego la muto
        const mensajesClonados = [...mensajes]
        // agrego el nuevo mensaje
        mensajesClonados.push(nuevoMensaje)
        // ahora llamo al setter y le paso la nueva lista de mensajes clonadas
        setMensajes(mensajesClonados)

    }

   

    // el retorno de ChatScreen. Si hay mensajes me muestra el button para borrarlos todos,
    // caso contrario me renderiza en listado de mensajes
    // al componente ListaDeMensajes le paso por params los mensajes con uso de useState, 
    // también le paso al componente la función deleteMensajePorId, que a su vez de la pasa al mensaje
    return (
        <div>
            <h1>Mensajes</h1>
            { 
                mensajes.length > 0
                &&
                <button onClick={deleteTodosLosMensajes}>Borrar todos los mensajes</button>
            }
            <ListaDeMensajes mensajes={mensajes} deleteMensajePorId={deleteMensajePorId} />
            <FormularioNuevoMensaje agregarNuevoMensaje={agregarNuevoMensaje} />

            
        </div>
    )
};

export default ChatScreen;
