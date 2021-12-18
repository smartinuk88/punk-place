import React from "react";
import "./Header.css";
import punkLogo from "../assets/punk-logo.png";
import searchIcon from "../assets/search.png";

function Header() {
  return (
    <div className="header">
      <div className="header__logoContainer">
        <img src={punkLogo} alt="" className="header__punkLogo"></img>
      </div>

      <div className="header__searchBar">
        <div className="header__searchBarLogoContainer">
          <img src={searchIcon} alt="" className="header__searchBarLogo"></img>
        </div>
        <input
          type="search"
          className="header__searchBarInput"
          placeholder="What are you looking for?"
        ></input>
      </div>

      <div className="header__items">
        <p>Marketplace</p>
        <p>Create</p>
      </div>
      <div className="header__loginContainer">
        <button type="submit" className="header__loginButton">
          LOG IN
        </button>
      </div>
    </div>
  );
}

export default Header;
