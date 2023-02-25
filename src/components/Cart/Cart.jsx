import React from 'react';
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {

    const data = [
        {
            id: 1,
            img: "https://content.moss.co.uk/images/extralarge/966733217_01.jpg",
            img2: "https://content.moss.co.uk/images/extralarge/966771526_01.jpg",
            title: "Long Sleeves Graphic T-shirt",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eveniet magni iste esse illo. Distinctio magni, dolorem molestias perspiciatis eveniet, quis omnis provident esse, error voluptas quos asperiores ipsum hic?",
            isNew: true,
            oldPrice: 30,
            price: 25,
        },
        {
            id: 2,
            img: "https://content.moss.co.uk/images/extralarge/966771526_01.jpg",
            title: "Bright Sleeves Graphic T-shirt",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eveniet magni iste esse illo. Distinctio magni, dolorem molestias perspiciatis eveniet, quis omnis provident esse, error voluptas quos asperiores ipsum hic?",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
    ]

  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {data?.map(item=>(
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc && item.desc?.substring(0, 100)}</p>
                    <div className="price">1 x ${item.price}</div>
                </div>
                <DeleteOutlinedIcon className="delete" />
            </div>
        ))}
        <div className="total">
            <span className='sub'>Subtotal</span>
            <span>$123</span>
        </div>
        <button>Proceed to Checkout</button>
        <span className="reset">Reset Car</span>
    </div>
  )
}

export default Cart