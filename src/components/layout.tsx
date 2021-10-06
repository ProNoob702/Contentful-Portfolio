import React from 'react';
import '../theme/index.scss';
import { Navigation } from './navigation';

interface Props {
  pageTitle: string;
}

const Layout: React.FC<Props> = ({ pageTitle, children }) => {
  return (
    <div className="layout">
      <Navigation />
      {/* <main className="content">
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <footer>
        <p>Copyright 2021 Web Warrior</p>
      </footer> */}
    </div>
  );
};

export default Layout;
