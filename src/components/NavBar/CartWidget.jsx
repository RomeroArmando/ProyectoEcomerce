import { FaCartPlus } from "react-icons/fa6";
import React from 'react'
import "./CartWidget.scss"

const CartWidget = () => {

  return (

    <div className="cart">

      <FaCartPlus size={50}/>

      <p>1</p>
      
    </div>
  )

}

export default CartWidget