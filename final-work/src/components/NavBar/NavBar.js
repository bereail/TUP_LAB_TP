import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isSearchExpanded, setSearchExpanded] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para realizar la búsqueda
    const searchTerm = e.target.elements.search.value;
    console.log('Buscar:', searchTerm);
    // Resto de la lógica de búsqueda
  };

  const handleMouseEnter = () => {
    setSearchExpanded(true);
  };
  
  const handleMouseLeave = () => {
    setSearchExpanded(false);
  };

  return (
    <nav className="navBar">
      <div className="navBar-head">
        <Link to="/" className="title">
          <h1>UTN</h1>
        </Link>
      </div>
      <div className="btn">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            placeholder="Search book"
            className={isSearchExpanded ? 'searchExpanded' : ''}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <button type="submit">Search</button>
        </form>
        <Link to="/signIn" className="btn btn-primary">Login</Link>
      </div>
    </nav>
  );
};

export default NavBar;
