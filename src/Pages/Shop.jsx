import React from 'react'
import Hero from '../Component/Hero/Hero'
import Popular from '../Component/Popular/Popular.jsx'
import Offers from '../Component/Offers/Offers.jsx'
import NewCollections from '../Component/NewCollections/NewCollections.jsx'
import Newsletter  from '../Component/NewsLetter/NewsLetter.jsx'
import Fotter from '../Component/Footer/Fotter.jsx'
const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <Newsletter/>
      
    </div>
  )
}

export default Shop
