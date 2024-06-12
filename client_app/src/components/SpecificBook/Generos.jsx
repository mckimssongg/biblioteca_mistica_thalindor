import React from 'react'

export default function Generos({generos}) {
  return (
    <>
    <p><strong>Generos:</strong></p>
    <ul>
      {generos.map((genero, index) => (
        <li key={index}>{genero}</li>
      ))}
    </ul>
    </>
  )
}