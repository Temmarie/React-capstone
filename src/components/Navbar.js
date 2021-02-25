import React from 'react';
import { Link } from 'react-router-dom';
import navbar from '../css/Navbar.module.css';
import Filter from '../container/Filter';

const Navbar = () => (
  <nav className={navbar.navbar}>
    <h1>PoKéMoN</h1>
    <div className={navbar.right}>
      <div><Link to="/">All PoKéMoNs</Link></div>
      <Filter />
    </div>
  </nav>
);

export default Navbar;
