import React from 'react';
import Product from '../components/Product';
import data from "../data";

const HomeScreen = () => {
    return (
        <div className="row center">
            {data.products.map((p) => {
              return (
                <Product p={p} key={p._id}/>
              )
            })}
            </div>
    )
}

export default HomeScreen;
