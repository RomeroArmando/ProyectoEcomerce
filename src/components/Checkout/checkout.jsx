import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import FormularioCheckout from './FormularioCheckout.jsx';
import db from '../../db/db.js';
import validateForm from '../../utils/validacionFormulario.js';
import { toast } from 'react-toastify';

import './checkout.css';

const Checkout = () => {
  const { vaciarCarrito } = useContext(CartContext);
  
  const [datosForm, setDatosForm] = useState({
    nombre: '',
    telefono: '',
    email: '',
  });
  const [idOrden, setIdOrden] = useState(null);
  const { carrito, precioTotal } = useContext(CartContext);

  const handleChangeInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    //formatear correctamente la informacion de la orden a subir
    const orden = {
      comprador: { ...datosForm },
      productos: [...carrito],
      fecha: Timestamp.fromDate(new Date()),
      total: precioTotal(),
    };
    //validamos los campos del formulario antes de enviar la orden
    const response = await validateForm(datosForm);
    if (response.status === 'success') {
      sendOrder(orden);
    } else {
      toast.warning(response.message);
    }
  };

  const sendOrder = async (orden) => {
    try {
      const ordenesRef = collection(db, 'ordenes');
      const ordenDb = await addDoc(ordenesRef, orden);
      setIdOrden(ordenDb.id);
      vaciarCarrito()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="checkout">
      {idOrden ? (
        <div className="order-completed">
          <h2>Orden completada correctamente! 😁</h2>
          <p>Guarde el id de su orden generada: {idOrden} </p>
        </div>
      ) : (
        <FormularioCheckout
          datosForm={datosForm}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
        />
      )}
    </div>
  );
};
export default Checkout;
