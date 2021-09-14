import {useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';

import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import  Checkout from './components/Checkout';
import Showproducts from './components/Showproducts';
import Editproduct from './components/Editproduct';
import Payment from './components/Payment';

function App() {
  const [product , setProduct] = useState([]);

  useEffect(() => {
    const getProduct =async () => {
      const res = await axios.get("http://localhost:5000/")
      setProduct(res.data)
    }
    getProduct();
  },[]);

  return (
    
  <Router>
    <div className="App">
          <Navbar/>
            <Switch>
                    <Route path="/Login">
                      <Login/>
                    </Route>
                    <Route path="/showProduct">
                      <Showproducts  />
                    </Route>
                    <Route path="/Editproduct">
                      <Editproduct  />
                    </Route>
                    

                    <Route path="/Checkout">
                      <Checkout />
                    </Route>

                    

                    <Route path="/payment">
                      <Payment/>
                    </Route>

                      <Route path="/">
                      <Home />
                    </Route>
            </Switch>
      
    </div>
    
</Router>
  );
}

export default App;
