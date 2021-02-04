import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
      <BrowserRouter>
        <div className="grid-container">
        <header className="row">
            <div><a className="brand" href="index.html">Amazona</a></div>
            <div>
                <a href="cart.html">Cart</a>
                <a href="sigin.html">Sign In</a>
            </div>
        </header>
        <main>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/product/:_id" component={ProductScreen}/>
        </main>
        <footer>
            All Rights Reserved
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
