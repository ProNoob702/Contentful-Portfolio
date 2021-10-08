import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useIsMobileView } from '../../hooks/useIsMobileView';
import MainNavigation from './mainNavigation';
import MobileNavigation from './mobileNavigation';

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
  const isNotMobileView = useIsMobileView();
  return <div className={classes.container}>{isNotMobileView ? <MainNavigation /> : <MobileNavigation />}</div>;
};
