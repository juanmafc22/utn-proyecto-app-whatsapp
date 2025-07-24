import React from 'react'

import { useState } from 'react'

import NavBar from './Components/NavBar/NavBar'

function App() {
  return (
    <div>
      <ComponenteNombre />
      <ComponenteJuan />
      <ComponenteManuel />
      <ComponenteFernandez />
      <NavBar />
    </div>
  )
}


function ComponenteNombre() {
  return (
    <div>
      <h1>Este es el título de los nombre</h1>
    </div>
  )
}

function ComponenteJuan() {
  return (
    <div>
      <p>Juan</p>
    </div>
  )
}

function ComponenteManuel() {
  return (
    <div>
      <p>Manuel</p>
    </div>
  )
}

function ComponenteFernandez() {
  return (
    <div>
      <p>Fernandez</p>
    </div>
  )
}

export default App