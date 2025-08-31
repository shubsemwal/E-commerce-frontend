import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
import './CartItem.css'

const Cartitem = () => {
  const {getTotalCartAmount, all_product, cartItems, addToCart, removeToCart } = useContext(ShopContext);

  return (
    <div className='cartitem'>
      <div className="cartitem-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitem-format-main">
                <img src={e.image} alt="" className='carticon_product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitem-quantity'>{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img className='carticon-remove_icon' src={remove_icon} onClick={() => removeToCart(e.id)} alt="Remove" />
              </div>
              <hr />
            </div>
          );
        }
        return null;
        
      })}
      <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
              <div className='cartitems-total-item'>
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
        </div>
    </div>
  );
};

export default Cartitem;
