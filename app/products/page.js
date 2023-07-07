"use client"
import React, { useEffect, useState } from 'react'
import { getProducts } from '@/utils' 

const Products = () => {

    const [product, setProduct] = useState([])

    useEffect(async () => {
        const data = await getProducts()
        setProduct(data)
        // getProducts().then(products =>setProduct(products) )
        // console.log(getProducts().value, 'products');
    },[])
    console.log(product, 'useState product');
  return (
    <div className='container px-4'>Products</div>
  )
}

export default Products