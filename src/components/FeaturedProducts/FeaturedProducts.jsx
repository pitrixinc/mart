import React from 'react';
import Card from '../Card/Card';
import "./FeaturedProducts.scss";

const FeaturedProducts = ({type}) => {

    const data = [
        {
            id: 1,
            img: "https://content.moss.co.uk/images/extralarge/966733217_01.jpg",
            img2: "https://content.moss.co.uk/images/extralarge/966771526_01.jpg",
            title: "Long Sleeves Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "",
            img2: "",
            title: "Bright Sleeves Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: "",
            img2: "",
            title: "Short Sleeves Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "",
            img2: "",
            title: "Coloured Sleeves Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
    ]

  return (
    <div className='featuredProducts'>
        <div className="top">
           <h1>{type} products</h1>
           <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Eos velit porro eum expedita natus dolor modi aliquam aut nulla tempora rerum omnis nisi necessitatibus voluptatibus, 
            quis eveniet quas! Dolore, eius!
           </p>
        </div>
        <div className="bottom">
            {data.map(item=>(
              <Card item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts