import React from 'react'
import "./ProductDisplay"
import start_icon from "../Assets/star_icon.png";
import start_dull_icon from "../Assets/star_dull_icon.png";

function ProductDisplay(props) {
    const {product} = props
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-image">
            <img className='product-main-img' src={product.image} alt="" />
        </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={start_icon} alt="" />
                <img src={start_icon} alt="" />
                <img src={start_icon} alt="" />
                <img src={start_icon} alt="" />
                <img src={start_dull_icon} alt="" />
                <p>(112)</p>
            </div>
        </div>
     </div>
  )
}

export default ProductDisplay