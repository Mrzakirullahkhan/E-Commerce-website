import React, { useContext } from 'react'
import cross_icon from "../Assets/cart_cross_icon.png"
import "./CartItems.css"
import { shopContext } from '../../Context/ShopContext'
function CartItems() {
    const { all_products, cartItems, removeFromCart } = useContext(shopContext)
    // console.log(all_products)
    // console.log(cartItems)
    // console.log(removeFromCart)
    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_products.map((e) => {
                console.log(e.id)
                if (cartItems[e.id] === 0) {
                    return <div>
                        <div className="cartitems-format">
                            <img src="" alt="" className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>{e.new_price * cartItems[e.id]}</p>
                            <img src={cross_icon} onClick={removeFromCart(e.id)} alt="" />
                        </div>
                        <hr />
                    </div>

                }
                return null
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>subtotal</p>
                            <p>${0}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-items">
                            <p>Shipping</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${0}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>if you have a promo code, Enter it here </p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems