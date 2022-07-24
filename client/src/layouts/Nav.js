import React from 'react';
import {Link} from "react-router-dom";
import __ from "../utils/i18n";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <Link className="navbar-brand" to={'/'}>{__('Test Shop')}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <Link className="nav-link active" to={'/'}>{__('Home')}</Link>
            </li>
            {/*<li className="nav-item dropdown">*/}
            {/*  <a*/}
            {/*    className="nav-link dropdown-toggle"*/}
            {/*    href="#"*/}
            {/*    role="button"*/}
            {/*    data-bs-toggle="dropdown"*/}
            {/*    aria-expanded="false"*/}
            {/*  >Shop</a>*/}
            {/*  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">*/}
            {/*    <li><a className="dropdown-item" href="#!">All Products</a></li>*/}
            {/*    <li>*/}
            {/*      <hr className="dropdown-divider"/>*/}
            {/*    </li>*/}
            {/*    <li><a className="dropdown-item" href="#!">Popular Items</a></li>*/}
            {/*    <li><a className="dropdown-item" href="#!">New Arrivals</a></li>*/}
            {/*  </ul>*/}
            {/*</li>*/}
          </ul>
          <form className="d-flex">
            <button className="btn btn-outline-dark" type="submit">
              <i className="bi-cart-fill me-1"></i>
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
