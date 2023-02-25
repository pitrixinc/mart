import React, { useState } from 'react';
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1)

  const images = [
    "https://content.moss.co.uk/images/extralarge/966733217_01.jpg",
    "https://content.moss.co.uk/images/extralarge/966771526_01.jpg",
    "https://content.moss.co.uk/images/extralarge/966733217_01.jpg"
  ]

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
           <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)} />
           <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)} />
           <img src={images[2]} alt="" onClick={e=>setSelectedImg(2)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ullam. Excepturi delectus harum rerum eos consequuntur dolore quod exercitationem fuga, voluptatum, sint qui praesentium nostrum quas quidem deleniti odit quam.</p>
        <div className="quantity">
          <button onClick={()=>setQuantity((prev) => prev ===1 ? 1 : prev-1)}>-</button>
          {quantity}
          <button onClick={()=>setQuantity((prev)=>prev+1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon/> Add to Cart
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon/> Add to Wish List
          </div>
          <div className="item">
            <BalanceIcon/> Add to Compare
          </div>
        </div>
        <div className="info">
           <span>Vendor: Polo</span>
           <span>Product Type: Shirt</span>
           <span>Tag: Shirt, Dress</span>
        </div>
        <hr />
        <div className="info">
          <span>Description</span>
          <hr />
          <span>Additional Information</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product