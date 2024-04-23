import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = ({ role }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    // Implement search functionality here
    console.log('Search query:', searchQuery);
    // You can redirect to a search results page or handle search logic
    event.preventDefault();
  };

  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <Link to="/" className='navbar-brand'>e-Librarian</Link>
      </div>
      <div className='navbar-right'>
        <form onSubmit={handleSearchSubmit} className="navbar-search-form">
          <input
            type="text"
            placeholder="Search Books"
            value={searchQuery}
            onChange={handleSearchChange}
            className="navbar-search-input"
          />
          <button type="submit" className="navbar-search-button">Search</button>
        </form>
        <Link to="/books" className='navbar-link'>Books</Link>
        {role === "admin" && (
          <>
            <Link to="/addbook" className="navbar-link">Add Book</Link>
            <Link to="/addstudent" className="navbar-link">Add Student</Link>
            <Link to="/dashboard" className="navbar-link">Dashboard</Link>
          </>
        )}
        {role === "" ?
          <Link to="/login" className='navbar-link'>Login</Link>
          : <Link to="/logout" className='navbar-link'>Logout</Link>
        }
      </div>
    </nav>
  );
};

export default Navbar;
