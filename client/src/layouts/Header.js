import React from 'react';
import __ from "../utils/i18n";

function Header(props) {
  return (
    <header className="bg-dark py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">{__('Test Shop')}</h1>
          <p className="lead fw-normal text-white-50 mb-0">{__('This is a simple test shop')}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
