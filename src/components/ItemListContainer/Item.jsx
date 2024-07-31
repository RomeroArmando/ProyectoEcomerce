import React from 'react'

import { Link } from "react-router-dom"

const Item = ({ producto }) => {
  return (
    <div style={{margin:"0 100px"}}>
      <img width={100} src={producto.imagen} alt="" />
      <p>{producto.nombre}</p>
      <Link to={ "/detalle/" + producto.id } style={{ color: "black" }} >Ver detalles</Link>
    </div>
  )
}

export default Item