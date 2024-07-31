import React from 'react'

const ItemDetail = ( { producto } ) => {
    console.log(producto)
  return (
    
    <div>
      <img src={producto.imagen} alt="" />
      <h2>{producto.nombre}</h2>
    </div>

  )

}

export default ItemDetail