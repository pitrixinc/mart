import React, { useState } from 'react';
import "./Product.scss";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0)

  const images =() => [
    "https://content.moss.co.uk/images/extralarge/966733217_01.jpg",
    "https://content.moss.co.uk/images/extralarge/966771526_01.jpg"
  ]

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
           <img src={images[0]} alt="" />
           <img src={images[1]} alt="" />
        </div>
        <div className="mainImg">
          <img src="" alt="" />
        </div>
      </div>
      <div className="right"></div>
    </div>
  )
}

export default Product