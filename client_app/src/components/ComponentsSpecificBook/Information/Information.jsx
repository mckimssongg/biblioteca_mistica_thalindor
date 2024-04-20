import React from 'react'

export default function Information({n_pag, editorial, idiomas, fecha_publicacion, className}) {
  return (
    <div className={className}>
        <p><strong>No. pág: </strong>{n_pag}</p>
        <p><strong>Editorial: </strong>{editorial}</p>
        <p><strong>Idiomas: </strong>{idiomas}</p>
        <p><strong>Fecha de publicación: </strong>{fecha_publicacion}</p>
    </div>
  )
}
