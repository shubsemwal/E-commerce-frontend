import React, { useContext } from 'react'
import{ ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';

import BreadCrum from '../Component/BreadCrums/BreadCrums.jsx';
import ProductDisplay from '../Component/Productdisplay/ProductDisplay.jsx';
import RelatedProducts from '../Component/RelatedProducts/RelatedProducts.jsx';


const Product = () => {

  const {all_product}= useContext(ShopContext);
  const {productId}= useParams();
  const product = all_product.find((e)=> e.id===Number(productId))
  
  
  return (
    <div>
      
      <BreadCrum product ={product} />
      <ProductDisplay product={product}/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
