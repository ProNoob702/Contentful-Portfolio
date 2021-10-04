import { Link } from 'gatsby';
import React from 'react';

const NavBar: React.FC<{}> = () => {
  return (
    <nav>
      <h1>Web Warrior</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
};

export default NavBar;
