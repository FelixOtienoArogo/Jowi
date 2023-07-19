import './styles/App.css';
import Header from './header';
import Main from './main';
import axios from "axios";
import React, { useState, useEffect } from 'react';

function App() {
  const [searchResult, setSearchResult] = useState('');

  const handleSearchSubmit = (term) => {
    setSearchResult(term);
  };
  return (
    < div id="shell">
      <Header onSearchSubmit={handleSearchSubmit} />
      <Main searchResult={searchResult} />
    </div>
  );
}

export default App;
