import React from 'react';

function Navigation() {
  return (
    <nav className="gnav">
      <div className="gnav-inner">
        <ul className="gnav-list">
          <li className="gnav-item">
            <a href="#works">works</a>
          </li>
          <li className="gnav-item">
            <a href="#skill">skill</a>
          </li>
          <li className="gnav-item">
            <a href="#about">about</a>
          </li>
          <li className="gnav-item">
            <a href="#contact">contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
