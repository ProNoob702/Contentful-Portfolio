import { makeStyles, Theme, useMediaQuery } from '@material-ui/core';
import React from 'react';
import MainNavigation from './mainNavigation';
import MobileNavigation from './mobileNavigation';

export const navigationData: { to: string; text: string }[] = [
  { to: '/', text: 'Home' },
  { to: '/works/', text: 'Works' },
  { to: '/blog/', text: 'Blog' },
  { to: '/contact/', text: 'Contact' },
];

export const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative',
    zIndex: 10,
  },
}));

export const Navigation: React.FC<{}> = () => {
  const classes = useStyles();
  const isNotMobileView = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  return <div className={classes.container}>{isNotMobileView ? <MainNavigation /> : <MobileNavigation />}</div>;
};
