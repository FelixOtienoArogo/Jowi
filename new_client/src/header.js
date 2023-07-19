import "./styles/header.css";
import React, { useState } from 'react';

function Header({ onSearchSubmit }){
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      onSearchSubmit(searchTerm);
    };

    return(
      <div id="header">
        <h1 id="logo">
            <a href="#">Jowi</a>
        </h1>
        <div className="social">
          <span>FOLLOW US ON:</span>
          <ul>
            <li><a className="twitter" href="#">twitter</a></li>
            <li><a className="facebook" href="#">facebook</a></li>
            <li><a className="vimeo" href="#">vimeo</a></li>
            <li><a className="rss" href="#">rss</a></li>
          </ul>
        </div>
        <div id="navigation">
          <ul>
            <li><a className="active" href="#">HOME</a></li>
            <li><a href="#">NEWS</a></li>
            <li><a href="#">PREMIER</a></li>
            <li><a href="#">COMING SOON</a></li>
            <li><a href="#">CONTACT</a></li>
            <li><a href="#">ADVERTISE</a></li>
          </ul>
        </div>
        <div id="sub-navigation">
          <ul>
            <li><a href="#">SHOW ALL</a></li>
            <li><a href="#">RECENTLY UPLOADED</a></li>
            <li><a href="#">TRENDING</a></li>
            <li><a href="#">MOST COMMENTED</a></li>
          </ul>
          <div id="search">
            <form onSubmit={handleSubmit} acceptCharset="utf-8">
              <label htmlFor="search-field">SEARCH</label>
              <input type="text" name="search field" value={searchTerm} onChange={handleSearch} id="search-field" className="blink search-field"  />
              <input type="submit" value="GO!" className="search-button" />
            </form>
          </div>
        </div>
      </div>
    );
}

export default Header;
