import {useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';

import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import subtotal from './components/Subtotal';
import Home from './components/Home';
import  Checkout from './components/Checkout';
import Editproduct from './components/Editproduct';
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
                    <Route path="/editProduct">
                      <Editproduct  />
                    </Route>
                    

                    <Route path="/Checkout">
                      <Checkout />
                    </Route>

                    <Route path="/payment">
                        <subtotal />
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
