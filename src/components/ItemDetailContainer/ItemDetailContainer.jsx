import React, { useEffect, useState } from 'react'

import { products } from '../../productos'

import { useParams } from "react-router-dom"
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})

  const { id } = useParams()

  useEffect( ()=>{

    const productSelected = products.find( producto => producto.id === parseInt(id) )
    setProduct(productSelected)

  }, [id])

  return (
    <div>
       <ItemDetail product={ product } />
    </div>
  )
}

export default ItemDetailContainer