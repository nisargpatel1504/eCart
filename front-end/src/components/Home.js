import React, { useState, useEffect, useLayoutEffect } from "react";
import "./home.css";
import { useQuery } from "react-query";
import Product from "./Product.js";
import axios from "../axios.js";
import { useStateValue } from "../Stateprovider";
import { Link } from "react-router-dom";

function Home() {
  const [product, setProduct] = useState([]);
  const [{ user }, dispatch] = useStateValue([]);

  useLayoutEffect(() => {
    async function fetchData() {
      const req = await axios.get("/api/products");
      setProduct(req.data);
    }
    fetchData();
  }, [{ user: null }]);

  const checkAdmin = () => {
    if (user && user.email === "admin@gmail.com") {
      return "Edit Product";
    }
  };
  return (
    <div className="home">
      <Link to="/showProduct">{checkAdmin()}</Link>
      <div className="home__container">
        <div className="home__row">
          {product.map((item) => (
            <Product
              key={item._id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
