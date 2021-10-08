import { makeStyles } from '@material-ui/core';
import { Link } from 'gatsby';
import React from 'react';
import { navigationData } from '.';

const useStyles = makeStyles(({ typography, palette }) => ({
  container: {
    display: 'flex',
    flex: 1,
    margin: '27px 2% 27px 2%',
    position: 'relative',
  },
  navLinkContainer: {
    display: 'inline-block',
  },
  navLink: {
    border: 'none',
    display: 'inline-block',
    padding: `${typography.pxToRem(8)} ${typography.pxToRem(8)}`,
    textDecoration: 'none',
    color: palette.text.primary,
    fontSize: 20,
    fontWeight: 500,
  },
  navLinkActive: {
    color: palette.primary.main,
  },
}));

const MainNavigation: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <span className="takeTheRest" />
      <ul>
        {navigationData.map((link, i) => (
          <li className={classes.navLinkContainer} key={i}>
            <Link to={link.to} className={classes.navLink} activeClassName={classes.navLinkActive}>
              <span>{link.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainNavigation;
