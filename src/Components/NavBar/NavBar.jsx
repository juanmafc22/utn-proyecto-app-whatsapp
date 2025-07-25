import React from "react"

/*
Elementos tentativos del Nav Bar:
- Arriba de todo
    - Burger menu
    - Chats
    - Estados
    - Llamados
- Abajo (separado por una línea delgada gris)
    - Rueda de ajustes
    - Perfil
*/

let club = 'CARC'
let jugadores = ['Fideo', 'Marcos', 'Palma', 'Fatu Brown']
let elements = []

for (let jugador of jugadores) {
    elements.push(<li></li>)
}

function NavBar() {

    return (
        <div>
            <p>Este es la navbar de {club}</p>
            <p>Algunos jugadores del club</p>
        </div>
    )

}

export default NavBar