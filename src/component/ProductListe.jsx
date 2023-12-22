import React from 'react'
import { product } from '../product'
import ProductItems from './ProductItems'

function ProductListe() {
  return (
    <div className="product-liste">
      {product.map((product) => (
        <ProductItems
          img={product.img}
          title={product.title}
          price={product.price}
          resume={product.resume}
        />
      ))}
    </div>
  );
}

export default ProductListe