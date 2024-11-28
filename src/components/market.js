import React, { useState } from 'react';
import test from '../images/test.png'


const Marketplace = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            name: 'example product',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            price: '$25',
            image: test, // Placeholder image
        },
        {
            id: 2,
            name: 'example product',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            price: '$15',
            image: test,
        },
        {
            id: 3,
            name: 'example product',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            price: '$200',
            image: test,
        },
    ]);

    return (
        <div className="marketplace-container">
            <h1>Wisdom Market</h1>
            <div className="items-grid">
                {items.map((item) => (
                    <div key={item.id} className="item-card">
                        <img src={item.image} alt={item.name} className="item-image" />

                        <div className='item-card-text'>
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <p className="item-price">{item.price}</p>
                            <button className="buy-button">Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marketplace;