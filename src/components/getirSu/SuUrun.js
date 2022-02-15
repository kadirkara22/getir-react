import React, { useEffect, useState } from 'react'
import Products from '../../api/SuProducts.json'
import ProductItem from '../ui/SuProductItem'
import Title from '../ui/Title'
const SuUrun = () => {

    const [products, setProduct] = useState([])

    useEffect(() => {
        setProduct(Products)
    }, [])
    return (
        <div className="container mx-auto pt-8">
            <Title>Ürünler</Title>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-4 2xl:grid-cols-4 gap-0.1 rounded-lg overflow-hidden">
                {
                    products.length && products.map((product, index) => <ProductItem key={index} product={product} />)
                }
            </div>
        </div>
    )
}

export default SuUrun