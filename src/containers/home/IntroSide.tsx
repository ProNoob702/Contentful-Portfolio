import React from 'react';
import { useIsMobileView } from '../../hooks/useIsMobileView';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import clsx from 'clsx';
import { contentMaxWidth } from '../../constants';

const useIntroSideStyles = makeStyles((theme) => ({
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
  introInfosSide: {
    [theme.breakpoints.up('sm')]: {
      maxWidth: '70%',
      marginRight: '10%',
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  bolded: {
    fontWeight: 700,
  },
  largeImg: {
    width: 250,
    height: 250,
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
    },
  },
  txtSpacing: {
    marginBottom: theme.spacing(2),
  },
  resumeBtn: {
    color: 'white',
    borderRadius: 0,
  },
}));

export const IntroSide: React.FC<{}> = ({}) => {
  const isNotMobileView = useIsMobileView();
  const classes = useIntroSideStyles();
  return (
    <div className={clsx(classes.container, isNotMobileView ? 'flexRow' : 'flexColumnReverse')}>
      <div className={clsx(classes.introInfosSide)}>
        <Typography variant={isNotMobileView ? 'h3' : 'h4'} className={clsx(classes.bolded, classes.txtSpacing)}>
          Hi, I am John, <br /> Creative Technologist
        </Typography>
        <Typography variant="subtitle1" className={classes.txtSpacing}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
          velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </Typography>
        <Button variant="contained" color="primary" className={classes.resumeBtn}>
          Download Resume
        </Button>
      </div>
      <Avatar
        className={classes.largeImg}
        alt="Remy Sharp"
        src="https://northoriental.files.wordpress.com/2020/07/man.jpg"
      />
    </div>
  );
};
