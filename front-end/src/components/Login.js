import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../Stateprovider";
import axios from "../axios.js";
import "./login.css";

function Login() {
  const [user1, setUser] = useState([]);
  const [{ user }, dispatch] = useStateValue([]);
  const history = useHistory();

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user1,
      [name]: value,
    });
  };

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const req = await axios.post("/api/users", user1);
      const { email, password } = req?.data?.user;
      if (req.status === 200) {
        dispatch({
          type: "SET_USER",
          user: req?.data?.user,
        });
        localStorage.setItem(
          "user",
          JSON.stringify({
            email,
            password,
          })
        );

        history.push("/");
      } else {
        alert(req.data.message);
      }
    } catch (error) {
      localStorage.removeItem("user");
      alert("Please enter valid email and password");
      console.log(error);
    }
  };

  const register = async (e) => {
    e.preventDefault();
    const { email, password } = user1;
    if (email && password) {
      const req = await axios.post("/api/users/register", user1);
      console.log(req.data);
      alert(`Registered :  ${req.data.email}`);
      history.push("/users");
    } else {
      alert("invalid input");
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <strong className="logo__text">eCart </strong>
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>

        <form onSubmit={signIn}>
          <h5>E-mail</h5>
          <input
            type="email"
            name="email"
            value={user1.email}
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />

          <h5>Password</h5>
          <input
            type="password"
            name="password"
            value={user1.password}
            placeholder="Enter your password"
            onChange={handleChange}
            required
          />

          <button type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the E-cart Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button className="login__registerButton" onClick={register}>
          Create your eCart Account
        </button>
      </div>
    </div>
  );
}

export default Login;
