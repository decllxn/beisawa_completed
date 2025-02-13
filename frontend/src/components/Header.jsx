import React from 'react';

const Header = () => {
  return (
    <header className="myHeader">
      <div className="logo">Beisawa</div>
      <ul className="menu">
        <li><a href="../page.html" className="text__link1">Home</a></li>
      </ul>
      <div className="search">
        <svg className="mySvg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
      </div>
    </header>
  );
};

export default Header;
