import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import './header.css';
import Search from "../search";
import DropDown from "../dropDown";

const Header = (props) => {

    const handleChangePerPage = (e) => {
        console.log(e.target.value)
    }

  return (
    <div className="Header">
      <Link to={'/'}>
      <img src={logo} alt="logo" className="Header-logo" />      
      </Link>
        <Search />
        <DropDown />
    </div>
  );
}

export default Header;
