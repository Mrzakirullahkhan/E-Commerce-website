import React from 'react'
import "./ProductDisplay.css"
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
            <div className="product-dispplay-right-price">
                <div className="product-display-right-price-old">
                    {product.old_price}
                </div>
                <div className="product-display-right-price-new">
                    {product.new_price}
                    </div>
            </div>
            <div className="product-display-right-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint incidunt quo mollitia nihil at sapiente. Voluptate cupiditate cumque aperiam obcaecati pariatur odio voluptatibus architecto! Nam nesciunt iure ab sed numquam?
            </div>
            <div className="product-display-right-size">
                <h1>Select Size</h1>
                <div className="product-display-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button>ADD TO CARD</button>
            <p className='product-display-right-catogary'><span>Catogary: </span>Women, T-shart, Crop Top</p>
            <p className='product-display-right-catogary'><span>Tags: </span>modern latest </p>
        </div>
     </div>
  )
}

export default ProductDisplay