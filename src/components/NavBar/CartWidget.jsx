import { FaCartPlus } from "react-icons/fa6"; // import { BsBagDash } from 'react-icons/bs';
import { useContext } from 'react'
import "./CartWidget.scss"
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {

  const { cantidadTotal } = useContext(CartContext)

  let cantidad = cantidadTotal()

  return (

    <Link to="/cart" className="cartwidget">
      <FaCartPlus size={35} />
      <p>{cantidad > 0 && cantidad}</p>
    </Link>

  )

}

export default CartWidget