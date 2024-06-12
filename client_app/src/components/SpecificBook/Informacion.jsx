import React from 'react'
import '../SpecificBook/StyleInformacion.css'
import ToggleEye from '../UI/Button/ToggleEye/ToggleEye'

export default function Informacion({No_paginas, editorial, idiomas, fecha_publicacion}) {
  return (
    <div className='informacion'>
        <p className='informacion-item'><strong>Número de páginas:</strong> {No_paginas}</p>
        <p className='informacion-item'><strong>Editorial:</strong> {editorial}</p>
        <p className='informacion-item'><strong>Idiomas:</strong> {idiomas}</p>
        <p className='informacion-item'><strong>Fecha de publicación:</strong> {fecha_publicacion}</p>
        <p className='informacion-item'> <ToggleEye/> </p>
    </div>
  )
}