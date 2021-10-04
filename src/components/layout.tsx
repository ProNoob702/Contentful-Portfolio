import Navbar from './navBar';
import React from 'react';
import '../theme/globals.scss';

interface Props {
  pageTitle: string;
}

const Layout: React.FC<Props> = ({ pageTitle, children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="content">
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <footer>
        <p>Copyright 2021 Web Warrior</p>
      </footer>
    </div>
  );
};

export default Layout;
