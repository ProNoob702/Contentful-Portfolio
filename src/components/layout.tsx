import React from 'react';
import '../theme/index.scss';
import { Footer } from './footer/footer';
import { Navigation } from './navigation';

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="layout flexColumn">
      <Navigation />
      <main className="content takeTheRest">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
