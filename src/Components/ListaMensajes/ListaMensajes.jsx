import React from "react"
import Mensaje from "../Mensaje/Mensaje"

const ListaDeMensajes = () => {

    const dataMensajes = [
    {
        id: 1,
        emisor: 'YO',
        hora: '23.33',
        texto: 'Hola cómo estás?',
        status: 'visto'
    },
    {
        id: 2,
        emisor: 'OTRO',
        hora: '13.13',
        texto: 'Aguante Central',
        status: 'no visto'
    },
    {
        id: 3,
        emisor: 'YO',
        hora: '07.23',
        texto: 'Llegó Di María?',
        status: 'visto'
    },
    ]

    const mensajeRenderizados = dataMensajes.map ( (data) => {
        return (
            <Mensaje 
                key = {data.id}
                id = {data.id}
                texto = {data.texto}
                hora = {data.hora}
            />
        )
    })

    return (
        <div>
            {mensajeRenderizados}
        </div>
    )

}

export default ListaDeMensajes

