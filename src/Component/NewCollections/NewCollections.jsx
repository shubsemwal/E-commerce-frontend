import React from 'react'
import new_Collections from '../Assets/new_collections.js';
import Item from '../Items/Item'
import './NewCollections.css'

const NewCollections = () => {
  return (
    <div className="newCollections">
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {new_Collections.map((item,i)=>{
             return <Item key={i} id ={item.id} name={item.name} image= {item.image}
            new_price = {item.new_price} old_price = {item.old_price}/>})}
        </div>
    </div>
  )
}

export default NewCollections
