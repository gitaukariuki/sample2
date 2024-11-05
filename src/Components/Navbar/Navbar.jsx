import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cartIcon from '../Assets/cart_icon.png';
import cartIconDark from '../Assets/cart_icon_dark.png';
import moonIcon from '../Assets/dark_mode.png';
import sunIcon from '../Assets/light_mode.png';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const { getTotalCartItems, theme, setTheme } = useContext(ShopContext);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`navbar ${theme}`} id="nav">
      <div className="nav-logo">
        <Link className="nav-logo-link" to="/">
          <img src={logo} alt="ShopNex Logo" />
          <p className={`pnav_${theme}`}>Sample Shop</p>
        </Link>
      </div>
      <ul className="nav-menu">
        {['shop', 'men', 'women', 'kids'].map((category) => (
          <li key={category} className={menu === category ? 'active' : ''} onClick={() => setMenu(category)}>
            <Link to={`/${category}`}>{category.charAt(0).toUpperCase() + category.slice(1)}</Link>
          </li>
        ))}
        <li>
          <Link to="/collections">Collections</Link>
        </li>
        <li>
          <Link to="/offers">Offers</Link>
        </li>
      </ul>
      <div className="nav-icons">
        <img
          onClick={toggleTheme}
          src={theme === 'light' ? moonIcon : sunIcon}
          className="theme-toggle"
          alt="Theme Toggle"
        />
        <Link className="nav-cart" to="/cart">
          <img src={theme === 'light' ? cartIcon : cartIconDark} alt="Cart" />
          <p>{getTotalCartItems()}</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
