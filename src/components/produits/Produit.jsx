import React from 'react'
import list from './Data'
import { Cards } from './Cards'
import './Produit.css'
import './button.css'
import { useState } from 'react'

const Produit = () => {
    const [cart, setCart] = useState([]);

    const handleClick = (item) => {
        cart.push(item);
        console.log(cart)
    }
    return (
        <section>
            {
                list.map((item) => (
                    <Cards key={item.id} item={item} handleClick={handleClick} />
                )
                )
            }
        </section>
    )
}

export default Produit