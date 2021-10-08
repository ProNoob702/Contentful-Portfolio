import React from 'react';
import { IconButton, makeStyles, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),
    paddingBottom: theme.spacing(5),
  },
  containerInner: {
    width: 'fit-content',
    margin: '0 auto',
    textAlign: 'center',
  },
  icon: {
    color: '#21243D',
    fontSize: 30,
  },
  copyRightText: {},
}));

export const Footer: React.FC<{}> = ({}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.containerInner}>
        <div className="flexRow">
          <IconButton aria-label="fc" className={classes.icon}>
            <FacebookIcon fontSize="large" />
          </IconButton>
          <IconButton aria-label="ins" className={classes.icon}>
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton aria-label="twitter" className={classes.icon}>
            <TwitterIcon fontSize="large" />
          </IconButton>
          <IconButton aria-label="linkedin" className={classes.icon}>
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </div>
        <Typography variant="caption" className={classes.copyRightText}>
          Copyright ©2021 All rights reserved
        </Typography>
      </div>
    </div>
  );
};
