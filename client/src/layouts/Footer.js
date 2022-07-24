import React from 'react';
import __ from "../utils/i18n";

function Footer(props) {
  return (
    <footer className="py-5 bg-dark">
      <div className="container">
        <p
          className="m-0 text-center text-white"
        >{__('Copyright')} &copy; {__('Your Website')} {(new Date).getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
