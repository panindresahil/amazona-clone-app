import React from 'react'
import Rating from './Rating';

const Product = ({ p }) => {
    return (
        <div key={p._id} className="card">
        <a href={`/product/${p._id}`}>
            <img className="medium" src={p.image} alt=""/>
            <div className="card-body">
                <a href={`/product/${p._id}`}>
                    <h2>{p.name}</h2>
                </a>
            </div>
            <Rating rating={p.rating} numReviews={p.numReviews}/>
            <div className="price">
                ${p.price}
            </div>
        </a>
    </div>
    )
}

export default Product;
