import React, { useContext } from 'react'
import "./CSS/ShopCatogary.css"
import { shopContext } from '../Context/ShopContext'
import Item from "../Components/item/Item"
import dropdown_icon from "../Components/Assets/dropdown_icon.png"
function ShopCatogary(props) {
  const {all_products} = useContext(shopContext);

  return (
    <div className='shop-catogary'>
      <img className='shopcatogary-banner' src={props.banner} alt="" />
      <div className="shopcatogary-indexSort">
        <p>
          <span>showing 1-12</span> out of 36 products
        </p>
        <div className='shopcatogary-sort'>
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcatogary-product">
        {all_products.map((item,i)=>{
          if(props.Catogary===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore more
      </div>
      </div>
  )
}

export default ShopCatogary