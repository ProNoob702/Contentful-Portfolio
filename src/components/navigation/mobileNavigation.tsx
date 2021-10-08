import { Divider, Drawer, IconButton, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import { navigationData } from '.';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flex: 1,
    margin: theme.spacing(1),
    position: 'relative',
  },
  menu: {
    width: 250,
  },
  navLink: {
    border: 'none',
    display: 'flex',
    textDecoration: 'none',
    color: theme.palette.text.primary,
    fontSize: 20,
    '& .linkBtn': {
      padding: theme.spacing(2),
    },
    '& .linkText': {
      textAlign: 'center',
    },
    '& .linkText span': {
      fontWeight: 500,
    },
  },
  navLinkActive: {
    color: theme.palette.primary.main,
  },
}));

const MobileNavigation: React.FC<{}> = () => {
  const classes = useStyles();
  const [anchor, setAnchor] = useState<EventTarget | null>(null);
  const handleClick = (event: React.MouseEvent) => {
    setAnchor((x) => (x ? null : event.currentTarget));
  };
  const handleClose = () => setAnchor(null);
  return (
    <div className={classes.container}>
      <span className="takeTheRest" />
      <IconButton onClick={handleClick} aria-label="nav">
        <MenuIcon fontSize="large" />
      </IconButton>
      <MobileNavigationMenu anchor={anchor} classes={classes} handleClose={handleClose} />
    </div>
  );
};

interface MenuProps {
  anchor: EventTarget | null;
  classes: ReturnType<typeof useStyles>;
  handleClose: () => void;
}

const MobileNavigationMenu: React.FC<MenuProps> = ({ anchor, classes, handleClose }) => {
  if (!open) return null;
  return (
    <Drawer anchor="right" open={Boolean(anchor)} onClose={handleClose}>
      <div className={classes.menu}>
        <List disablePadding>
          {navigationData.map((link, i) => (
            <div key={i}>
              <Link to={link.to} className={classes.navLink} activeClassName={classes.navLinkActive}>
                <ListItem className="flexCenterRow linkBtn" button>
                  <ListItemText className="linkText" primary={link.text} />
                </ListItem>
              </Link>
              <Divider />
            </div>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default MobileNavigation;
