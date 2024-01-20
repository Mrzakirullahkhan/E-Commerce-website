import React from 'react'
import "./Newletter.css"

function Newsletter() {
  return (
    <div className='news-letter'>
        <h1>Get Exlusive offers on your Email adress</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='your Email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter