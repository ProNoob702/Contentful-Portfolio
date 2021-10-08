import React from 'react';
import { Chip, makeStyles, Typography } from '@material-ui/core';
import { contentMaxWidth, sampleMarkdown } from '../../constants';
import marked from 'marked';

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
  workChip: {
    color: 'white',
    fontSize: 16,
    fontWeight: 700,
    height: 'unset',
    marginRight: theme.spacing(3),
  },
  postDes: {
    marginTop: theme.spacing(3),
    whiteSpace: 'pre-wrap',
    '& img': {
      width: '100%',
    },
    '& p': {
      fontSize: 16,
      fontWeight: 400,
    },
    '& h1': {
      fontSize: 30,
    },
    '& h2': {
      fontSize: 24,
    },
  },
}));

const html = marked(sampleMarkdown || '');
export const WorkDetail: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h4" className={classes.pageTitle}>
        Brunch this weekend?
      </Typography>
      <div className="flexRow">
        <Chip label="2018" className={classes.workChip} color="primary" />
        <Typography variant="body1">Illustration</Typography>
      </div>
      <div className={classes.postDes}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
};
