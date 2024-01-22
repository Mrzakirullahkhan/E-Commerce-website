import React from 'react'
import "./Breadcrums"
import arrow_icon from "../Assets/breadcrum_arrow.png"
function Breadcrums(props) {
    const {product} = props
  return (
    <div className='breadcrum'>
        Home <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon}  alt="" /> {product.name}
    </div>
  )
}

export default Breadcrums