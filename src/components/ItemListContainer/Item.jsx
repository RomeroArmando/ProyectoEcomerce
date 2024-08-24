import React from 'react'

import { Link } from "react-router-dom"

const Item = ({ producto }) => {
  return (
    <div className='card'>
      <div className='img-card'>
        <img src={producto.imagen} />
      </div>
      <p>{producto.nombre}</p>
      <p>Precio: ${producto.precio}</p>
      <Link to={ "/detalle/" + producto.id } >
      Ver detalles
      </Link>
    </div>
  )
}

export default Item