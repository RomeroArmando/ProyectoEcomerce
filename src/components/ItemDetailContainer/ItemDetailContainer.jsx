import React, { useEffect, useState } from "react";
import logo from "../../assest/img/icono.png";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import "./itemDetailContainer.css";
import { getDoc, doc } from "firebase/firestore";
import db from "../../db/db.js";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { idProducto } = useParams();

  const getProduct = async () => {
    //esto es necesario en todos los async
    try {
      const docRef = doc(db, "productos", idProducto);
      const dataDb = await getDoc(docRef);
      const data = { id: dataDb.id, ...dataDb.data() };

      setProducto(data);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  console.log(producto);
  return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;
