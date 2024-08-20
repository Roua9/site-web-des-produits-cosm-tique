import React from 'react'

export const Cards = ({ item, handleClick }) => {
    const { id, title, description, price, img } = item;
    return (
        <div className="cards">
            <div className="image_box">
                <img src={img} alt="" />
            </div>
            <div className="details">
                <p>{title}</p>
                <p>{description}</p>
                <p>{price} <span>DT</span></p>
                <button onClick={() => handleClick(item)} class="button-62" role="button"> <i className="fa fa-shopping-cart me-1"></i></button>
            </div>
        </div>
    )
}
