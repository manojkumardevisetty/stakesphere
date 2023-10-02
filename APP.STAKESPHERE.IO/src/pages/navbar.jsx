import React, { useState, useEffect } from "react";
import Web3 from "web3";
import TokenStakingABI from "../artifacts/contracts/Staking.sol/TokenStaking.json";
import './Navbar.css'; 
import logo from "../assets/logo.png";


const Navbar = () => {

  return (
    <nav className="navbar">
        <div className="navbar-left">
        <a href="http://stakesphere.io/" className="logo-link" target="_blank" rel="noopener noreferrer">
        <img src={logo} alt="Logo" className="logo-image" /></a>
        </div>
        <div className="navbar-right">
        <a href="http://stakesphere.io/" className="logo-link" target="_blank" rel="noopener noreferrer">
        <p>Home</p></a>
      </div>
    </nav>
  );
};

export default Navbar;
