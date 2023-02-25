import React from 'react';
import "./List.scss";
import Card from "../Card/Card";

const List = () => {

    const data = [
        {
            id: 1,
            img: "https://content.moss.co.uk/images/extralarge/966733217_01.jpg",
            img2: "https://content.moss.co.uk/images/extralarge/966771526_01.jpg",
            title: "Long Sleeves Graphic T-shirt",
            isNew: true,
            oldPrice: 30,
            price: 25,
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
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "",
            img2: "",
            title: "Coloured Sleeves Graphic T-shirt",
            oldPrice: 19,
            price: 12,
        },
    ];

  return (
    <div className='list'>
        {data?.map(item=>(
            <Card item={item} key={item.id} />
        ))}
    </div>
  )
}

export default List