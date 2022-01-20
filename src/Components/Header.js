import React from 'react';
import logo from '../logo.svg'

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <div>
          <a href=".">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
        </div>
        <span ></span>
        <nav>
          <ul>
            <li>
              <a href=".">Features</a>
            </li>
            <li>
              <a href=".">Princing</a>
            </li>
            <li>
              <a href=".">Resources</a>
            </li>
          </ul>
          <div >
            <a c href=".">
              Login
            </a>
            <a href=".">Sign Up</a>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
