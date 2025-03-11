import React from "react";
import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";


const Header = () => {
  const [btnName, setBtnName] = useState("LogIn");
  const onlineStatus = useOnlineStatus();

  //subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    // <div className="header">
    <div className="flex justify-between p-4  shadow-lg bg-emerald-50 align-middle font-semibold">
      <div className="logo-container">
        {/* <img src="https://logowik.com/content/uploads/images/food-service4537.jpg" className="logo"/> */}
        <img src={LOGO_URL} className="w-28" />
      </div>
      <div className="nav-items">
        <ul className="flex justify-center items-center">
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact US</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li><Link to="/cart">Cart ({cartItems.length})Items</Link></li>
          {/* <button className="login-btn bg-black text-emerald-50" onClick={()=> */}
          <button
            className="p-2 bg-black text-emerald-50"
            onClick={() =>
              btnName === "Login" ? setBtnName("LogOut") : setBtnName("Login")
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
