import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';

const ProductScreen = (props) => {
    const dispatch = useDispatch();
    const prodId = props.match.params.id;
    const productDetails = useSelector(state => state.productDetails)
    const { loading, product, error } = productDetails;
    console.log(prodId);
    useEffect(() => {
        dispatch(detailsProduct(prodId))
    }, [dispatch, prodId])
    return (
        <div>
        <Link to="/">Back To Result</Link>
        {loading && <LoadingBox/>}
        {error && <MessageBox error={error}/>}
        <div className="row top">
            <div className="col-2">
                <img className="large" src={product?.image} alt={product?.name}/>
            </div>
            <div className="col-1">
                <ul>
                    <li>
                        <h1>{product?.name}</h1>
                    </li>
                    <li>
                        <Rating
                            rating={product?.rating}
                            numReviews={product?.numReviews}
                        />
                    </li>
                    <li>
                        Price : ${product?.price}
                    </li>
                    <li>
                        <p>{product?.description}</p>
                    </li>
                </ul>
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <div className="row">
                                <div>Price</div> 
                                <div>${product?.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>Status</div> 
                                <div>{product?.countInStock > 0 ? <span className="success">In Stock</span> : <span className="error">Out of Stock</span>}</div>
                            </div>
                        </li>
                        <li>
                            <button className="primary block">Add To Cart</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ProductScreen;
