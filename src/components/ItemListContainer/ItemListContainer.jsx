import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.scss";

import { ClimbingBoxLoader } from "react-spinners";
import { getDocs, collection, query, where } from "firebase/firestore";
import db from "../../db/db.js";

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const [estaCargando, SetEstaCargando] = useState(false);
  const { idCategoria } = useParams();

  const getProductos = async () => {
    try {
      const productosRef = collection(db, "productos");
      const dataDb = await getDocs(productosRef);

      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });

      setProductos(data);
      //SetEstaCargando(false);
      //console.log(data)}
    } catch (error) {
      console.log(error);
    }
  };

  const getProductsBycategory = async () => {
    try {

      const productosRef = collection(db, "productos");
      const q = query(productosRef, where("categoria", "==", idCategoria));
      const dataDb = await getDocs(q);

      const data = dataDb.docs.map((productDb) => {

        return { id: productDb.id, ...productDb.data() };

      });

      setProductos(data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {
    //SetEstaCargando(true)
    console.log(idCategoria)

    if (idCategoria) {
      //console.log("nada");
      getProductsBycategory();

    } else {

      getProductos();

    }

  }, [idCategoria]);

  return (
    <div>
      <p>{saludo}</p>
      {estaCargando ? (
        <div>
          <ClimbingBoxLoader color="white" />
        </div>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};

export default ItemListContainer;
