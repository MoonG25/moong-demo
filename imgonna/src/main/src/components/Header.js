import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  constructor () {
    super();
    this.state = { dropdown: { open: '', icon: 'fa fa-angle-down' }};
  }

  _mouseOverHandler = () => {
    this.setState(state => ({ dropdown: { open: 'open', icon: 'fa fa-angle-up' }}));
  }

  _mouseOutHandler = () => {
    this.setState(state => ({ dropdown: { open: '', icon: 'fa fa-angle-down' }}));
  }

  render () {
    const { dropdown } = this.state;

    return (
        <header id="header-container" className="header-container home-header">
          <nav>
            <div className="header-left">
              <a href="/" className="logo">
                <span className="hide-small">imgonna</span>
              </a>
              <ul id="site-nav" className="ul-group">
                <li>
                  <Link to="/" className="hover-bold active">Flights</Link>
                </li>
                <li>
                  <Link to="/" className="hover-bold">Hotels</Link>
                </li>
              </ul>
            </div>
            <div className="header-right">
              <div className="menu-select">
                <span id="menu-dropdown" className={dropdown.open} onMouseOver={this._mouseOverHandler} onMouseOut={this._mouseOutHandler}>
                  <a href="#" className="dropdown-toggle">
                    <span className="menu-code">MENU</span>
                    <i className={dropdown.icon}></i>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li>
                      <Link to="/code">
                        <span className="menu-code">Code</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/insta">
                        <span className="menu-code">Insta</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="menu-code">About</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="menu-code">Beta</span>
                      </Link>
                    </li>
                  </ul>
                </span>
              </div>
              <div className="account-menus">
                <ul id="account-nav" className="ul-group">
                  <li>
                    <a href="#" className="hover-bold medium">Login</a>
                  </li>
                </ul>
                {/*
                  여기에 로그인 했을때의 상태 작성필요
                */}
              </div>
            </div>
          </nav>
        </header>
    )
  }
}

export default Header;