import React from 'react'
import { useState, useEffect } from 'react'
import "./ItemListContainer.scss"
import obtenerProductos from '../../data/data'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

import { getDocs, collection, query, where } from 'firebase/firestore'
import db from '../../db/db.js'

const ItemListContainer = ({saludo}) => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  const getProductos = async() =>{
    
    try {
      const productosRef = collection(db, "productos")
    const dataDb = await getDocs(productosRef)
    const data = dataDb.docs.map( (productDb) => {

    return{ id: productDb.id, ...productDb.data() }
      
    } )

    setProductos(data);
    //console.log(data)}
    
    } catch (error) {

      console.log(error)

    }


  }

  const getProductsBycategory = async() => {

    const productosRef = collection(db, "productos")
    const q = query( productosRef, where( "categoria", "==", idCategoria ))
    const dataDb = await getDocs(q)

    const data = dataDb.docs.map( (productDb) => {

      return{ id: productDb.id, ...productDb.data() }

    } )
    setProductos(data);
  }

  useEffect(() => {
    console.log(idCategoria)
    if (idCategoria){

      getProductsBycategory()

    } else {

      console.log("nada")

      getProductos()

    }
  }, [idCategoria]);

  return (
    
    <div className="itemlistcontainer" >
       <p>{saludo}</p>
       <ItemList productos={productos} />
    </div>
    
  )

}

export default ItemListContainer