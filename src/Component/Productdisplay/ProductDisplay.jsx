import React, { useContext } from 'react'
import'./ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const{product} = props;
    const {addToCart}= useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
         <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
         </div>
         <div className="product_display_img">
            <img  className='productdisplay-main-img' src={product.image} alt="" />
         </div>
        </div>
        <div className="productdisplay-right">
           <h1>{product.name}</h1>
           <div className="productdisplay-right-stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(510)</p>
           </div>
           <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">${product.old_price}</div>
            <div className="productdisplay-right-price-new">${product.new_price}</div>
           </div>
           <div className="productdisplay-right-description">
            A lightweight,Men Brand Logo Printed T-shirt
           </div>
           <div className="productdisplay-right-size">
            <h1>Select Sizes</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>L</div>
                <div>M</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
           </div>
           <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
           <p className='product-displayright-category'><span>Category:</span>Women,T-shirt,Crop-Top</p>
           <p className='product-displayright-category'><span>Tags:</span>Modern,Latestp</p>
         </div>
      
    </div>
  )
}

export default ProductDisplay
