import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { contentMaxWidth } from '../../constants';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { Link } from 'gatsby';
import { usePostsList } from '../../hooks/usePostsList';
import { format } from 'date-fns';

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
  blogList: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  seperator: {
    margin: theme.spacing(0, 2),
  },
  blogItemLink: {
    border: 'none',
    display: 'inline-block',
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
  blogItem: {
    display: 'flex',
    flexDirection: 'column',
    padding: `${theme.spacing(3)}px 0px ${theme.spacing(3)}px 0px`,
    cursor: 'pointer',
    '&:hover': {
      background: theme.palette.action.hover,
    },
  },
  blogItemTitle: {
    fontWeight: 500,
  },
  txtSpacing: {
    marginBottom: theme.spacing(1),
  },
  itemDivider: {
    color: theme.palette.grey[300],
  },
}));

export const BlogContent: React.FC<{}> = () => {
  const classes = useStyles();
  const posts = usePostsList();
  const seperator = <span className={classes.seperator}>|</span>;
  return (
    <div className={classes.container}>
      <Typography variant="h4" className={classes.pageTitle}>
        Blog
      </Typography>
      <List className={classes.blogList}>
        {posts.map((x) => (
          <div key={x.id}>
            <div className={classes.blogItem}>
              <Link to={`/blog/${x.id}`} className={classes.blogItemLink}>
                <Typography variant="h5" className={clsx(classes.blogItemTitle, classes.txtSpacing)}>
                  {x.name}
                </Typography>
                <div className={clsx('flexRow', classes.txtSpacing)}>
                  <Typography variant="body1">{format(new Date(x.postedOn), 'dd MMM YYY')}</Typography>
                  {seperator}
                  <Typography variant="body1" color="textSecondary">
                    {x.theme}
                  </Typography>
                </div>
                <Typography variant="body2" component="p">
                  {x.description.description}
                </Typography>
              </Link>
            </div>
            <Divider className={classes.itemDivider} />
          </div>
        ))}
      </List>
    </div>
  );
};
