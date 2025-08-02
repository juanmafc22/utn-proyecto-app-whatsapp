import React from "react"
 

const FormularioNuevoMensaje = ({agregarNuevoMensaje}) => {

    // funcion que se responsabiliza de manejar el evento de agregar el nuevo mensaje
    const handleSubmitSendMessageForm = (event) => {

        // prevenir el comportamenitno x defecto
        event.preventDefault()
        // target = el elemento del cual proviene el evento, ya está definido en el onSubmit del form
        // mensaje = ya está identificado x atributo 
        // value = lo que contiene (el valor) ese input type text
        let nuevoTextoMensaje = event.target.mensaje.value
        
        // ahora llamo a la funcion de agregarNuevoMensaje y le paso por parametro el valor de nuevoTextoMensaje
        agregarNuevoMensaje(nuevoTextoMensaje)
        // reseto el valor del input para que quede vacío
        event.target.mensaje.value = ''

    }

    return (
        <form onSubmit={handleSubmitSendMessageForm}>
            <div>
                <label htmlFor="mensaje">Escribe un mensaje: </label>
                <input type="text"placeholder="Ingresar el mensaje" id="mensaje" name="mensaje" required />
                <button type="submit">Enviar Mensaje</button>
            </div>

        </form>
    )

}


export default FormularioNuevoMensaje