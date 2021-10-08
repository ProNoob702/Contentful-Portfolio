import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { contentMaxWidth } from '../../constants';

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

export const BlogPost: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h4" className={classes.pageTitle}>
        UI Interactions of the week
      </Typography>
      <div className="flexRow">
        <Typography variant="body1" className={classes.dateInfo}>
          12 Feb 2020
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Design Pattern
        </Typography>
      </div>
      <div className={classes.postDes}>
        <Typography variant="body1" component="p">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
          velit mollit. Exercitation veniam consequat sunt nostrud amet.
          <br /> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
          enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est
          sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
          sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non
          deserunt ullamco est sit aliqua dolor do amet sint. <br /> Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor
          do amet sint. Velit officia consequat duis enim velit mollit.
          <br />
          <br /> Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua
          dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
          amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
          enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est
          sit aliqua dolor do amet sint. <br /> Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
          officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          <br />
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
          velit mollit. Exercitation veniam consequat sunt nostrud amet.
          <br /> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
          enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est
          sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
          sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non
          deserunt ullamco est sit aliqua dolor do amet sint. <br /> Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor
          do amet sint. Velit officia consequat duis enim velit mollit.
          <br />
          <br /> Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua
          dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
          amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
          enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est
          sit aliqua dolor do amet sint. <br /> Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
          officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </Typography>
      </div>
    </div>
  );
};
