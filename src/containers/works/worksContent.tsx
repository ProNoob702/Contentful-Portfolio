import React from 'react';
import { Chip, ListItem, ListItemText, makeStyles, Typography } from '@material-ui/core';
import { contentMaxWidth } from '../../constants';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { Link } from 'gatsby';
import { useWorksList } from '../../hooks/useWorksList';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '80%',
    margin: '0px auto',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: contentMaxWidth,
      marginTop: theme.spacing(10),
    },
  },
  pageTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(3),
  },
  worksList: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      paddingTop: 0,
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(3),
    },
  },
  workItem: {
    padding: `${theme.spacing(3)}px 0px ${theme.spacing(3)}px 0px`,
    cursor: 'pointer',
    '&:hover': {
      background: theme.palette.action.hover,
    },
  },
  itemLink: {
    border: 'none',
    textDecoration: 'none',
    color: theme.palette.text.primary,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginRight: 0,
    },
    display: 'flex',
  },
  workItemImg: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: 250,
    },
    height: 180,
    overflow: 'hidden',
    borderRadius: 5,
    backgroundSize: 'cover',
    marginRight: theme.spacing(2),
  },
  workItemText: {
    padding: 0,
    margin: 0,
  },
  workItemPrimaryText: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
      lineHeight: '24px',
      marginTop: theme.spacing(2),
    },
    fontSize: '30px',
    lineHeight: '30px',
    fontWeight: 700,
    marginBottom: theme.spacing(2),
  },
  workItemMiddleSide: {
    marginBottom: theme.spacing(2),
  },
  workItemChip: {
    background: '#142850',
    color: 'white',
    fontSize: 16,
    fontWeight: 700,
    height: 'unset',
    marginRight: theme.spacing(2),
  },
  itemDivider: {
    color: theme.palette.grey[300],
  },
}));

export const WorksContent: React.FC<{}> = () => {
  const classes = useStyles();
  const posts = useWorksList();
  return (
    <div className={classes.container}>
      <Typography variant="h4" className={classes.pageTitle}>
        Works
      </Typography>
      <List className={classes.worksList}>
        {posts.map((x) => (
          <>
            <ListItem className={classes.workItem} alignItems="flex-start">
              <Link to={`/works/${x}`} className={classes.itemLink}>
                <div
                  className={classes.workItemImg}
                  style={{
                    backgroundImage: `url("")`,
                  }}
                ></div>
                <ListItemText
                  primary="Brunch this weekend?"
                  className={classes.workItemText}
                  primaryTypographyProps={{
                    className: classes.workItemPrimaryText,
                  }}
                  secondary={
                    <>
                      <div className={clsx(classes.workItemMiddleSide, 'flexStartCenterRow')}>
                        <Chip label="2018" className={classes.workItemChip} />
                        <Typography variant="body1">Illustration</Typography>
                      </div>
                      <Typography variant="body2" component="p" color="textPrimary">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                      </Typography>
                    </>
                  }
                />
              </Link>
            </ListItem>
            <Divider className={classes.itemDivider} />
          </>
        ))}
      </List>
    </div>
  );
};
