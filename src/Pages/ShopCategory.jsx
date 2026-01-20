import React, { useContext } from 'react'
import './LoginSignup.css';

import  {ShopContext}  from '../Context/ShopContext.jsx'
import dropdown_icon from '../Component/Assets/dropdown_icon.png'
import Item from '../Component/Items/Item'

const ShopCategory = (props) => {
  const{all_product}= useContext(ShopContext);
  return (
    <div className='shop-category'>
      <div className="shopcategory-banner-wrapper">
        <img 
          className='shopcategory-banner' 
          src={props.banner} 
          alt="Category Banner"
          style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
        />
      </div>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 product
        </p>
        <div className="shopcategory-sort">
            Sort by <img src={dropdown_icon} alt="" />
        </div>
        </div>
         <div className="shopcategory_products">
          {all_product && all_product.map((item,i)=>{
            if(props.category===item.category){
              return <Item  key={i} id ={item.id} name={item.name} image= {item.image}
            new_price = {item.new_price} old_price = {item.old_price} />
            }else{
              return null;
            }
          })}
         </div>
         <div className="shopcategory-loadmore">
            Explore More
         </div>
      </div>
  
  )
}

export default ShopCategory