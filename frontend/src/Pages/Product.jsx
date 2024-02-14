import React, { useContext } from 'react'
import { shopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Components/Breadcrum/Breadcrums';
import ProductDisplay from '../Components/productDisplay/ProductDisplay';
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox"


function Product() {
  const {all_products} = useContext(shopContext)
  const {productId} =useParams();
  const product = all_products.find((item)=>(item.id===Number(productId)))

  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
    </div>
  )
}

export default Product
