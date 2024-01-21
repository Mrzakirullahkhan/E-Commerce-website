import React, { useContext } from 'react'
import "./CSS/ShopCatogary.css"
import { shopContext } from '../Context/ShopContext'
import dropdown_icon from "../Components/Assets/dropdown_icon.png"
function ShopCatogary(props) {
  const {all_products} = useContext(shopContext);
  return (
    <div className='shop-catogary'>
      <img src={props.banner} alt="" />
      <div className="shopcatogary-indexSort">
        <p>
          <span>showing 1-12</span> out of 36 products
        </p>
        <div className='shopcatogary-sort'>
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      </div>
  )
}

export default ShopCatogary