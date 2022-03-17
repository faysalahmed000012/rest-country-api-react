import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <h2>Welcome to my react website</h2>
      <nav>
        <ul className="menu">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
