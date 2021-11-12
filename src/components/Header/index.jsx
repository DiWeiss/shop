import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";
import cart from "../../assets/img/shoppingCart.svg";
import logo from "../../assets/img/logo.svg";

function Header({ totalCount }) {
  return (
    <div className="header">
      <div className="header__container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="logo">
            <div className="logo__img">
              <img src={logo} />
            </div>
            <div className="logo__name">GoodFood</div>
          </div>
        </Link>
        <Link to="/cart">
          <div className="header__cart --count"> {totalCount}</div>
          <img className="header__cart" src={cart} alt="cart"></img>
        </Link>
      </div>
    </div>
  );
}

export default Header;
