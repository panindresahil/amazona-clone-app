import React, { useEffect, } from 'react';
// import Axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { listProducts } from '../actions/productAction';

const HomeScreen = () => {
  const productList = useSelector(state => state.productList);
  const {loading, products, error} = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts())

  }, [dispatch])
    return (
      <>
      {loading ? <LoadingBox /> : error ? <MessageBox error={error}/> :
        <div className="row center">
            {products.map((p) => {
              return (
                <Product p={p} key={p._id}/>
              )
            })}
        </div> }
      </>
    )
}

export default HomeScreen;
