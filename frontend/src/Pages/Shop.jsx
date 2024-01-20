import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/populer/Popular'
import Offer from '../Components/Offer/Offer'
import Newcollection from '../Components/NewCollection/Newcollection'
import Newsletter from '../Components/Newsletter/Newsletter'
function Shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <Newcollection/>
      <Newsletter/>
    </div>
  )
}

export default Shop