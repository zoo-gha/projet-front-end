import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "./logo.png";
import { useSelector } from "react-redux";
import Head from "./Head";
import './Header.css';


const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false);
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".nav");
    search.classList.toggle("active", window.scrollY > 100);
  });
  const cart = useSelector((state) => state.cart);
  const wish = useSelector((state) => state.wishList);
  return (
    <div className="nav">
      <Head />
      <header className="header">
        <div className="container d_flex">
          <div className="logo width">
            <Link to="/">
              <img src={logo} alt="logo moha_shop" />
            </Link>
          </div>
          <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
            {MobileMenu ? (
              <i className="fas fa-times close home-btn demo"></i>
            ) : (
              <i className="fa-solid fa-bars open demo"></i>
            )}
          </button>
          <div className="navlink">
            <ul
              className={
                MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
              }
              onClick={() => setMobileMenu(false)}
            >
              <li>
                <Link to="/" className="links">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/shop" className="links">
                  Nos Produits
                </Link>
              </li>
              <li>
                <Link to="/about" className="links">
                  Qui nous somme?
                </Link>
              </li>
              <li>
                <Link to="/login" className="links">
                  Nous rejoindre
                </Link>
              </li>
              <li>
                <Link to="/contact" className="links">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="links">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="icon f_flex ">
            <div className="search11">
              <Link to="/search">
                <i className="fa fa-search icon-circle"></i>
              </Link>
            </div>

            <div className="wish">
              <Link to="/wishList">
                <i className="fa fa-heart icon-circle" />
                <span>
                  {wish.products.length === 0 ? "" : wish.products.length}
                </span>
              </Link>
            </div>

            <div className="cart">
              <Link to="/cart">
              <i className="fa fa-shopping-bag icon-circle"></i>
                <span>
                  {cart.products.length === 0 ? "" : cart.products.length}
                </span>
              </Link>
            </div>
            <Link to="/login">
              <i className="fa fa-user icon-circle"></i>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
