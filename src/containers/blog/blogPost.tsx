import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { contentMaxWidth } from '../../constants';
import { BlogPostType } from '../../models/BlogPost';
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
  dateInfo: {
    marginRight: theme.spacing(3),
  },
  postDes: {
    marginTop: theme.spacing(3),
  },
}));

export const BlogPost: React.FC<{ post: BlogPostType }> = ({ post }) => {
  const classes = useStyles();
  console.log('post', post);
  return (
    <div className={classes.container}>
      <Typography variant="h4" className={classes.pageTitle}>
        {post.name}
      </Typography>
      <div className="flexRow">
        <Typography variant="body1" className={classes.dateInfo}>
          {format(new Date(post.postedOn), 'dd MMM YYY')}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {post.theme}
        </Typography>
      </div>
      <div className={classes.postDes}>
        <Typography variant="body1" component="p">
          {post.description.description}
        </Typography>
      </div>
    </div>
  );
};
