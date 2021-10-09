import React from 'react';
import { Chip, makeStyles, Typography } from '@material-ui/core';
import { contentMaxWidth } from '../../constants';
import marked from 'marked';
import { WorkPostType } from '../../models/WorkPostType';
import { getYear } from 'date-fns';

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
      maxWidth: '100%',
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

export const WorkDetail: React.FC<{ work: WorkPostType }> = ({ work }) => {
  const classes = useStyles();
  const html = marked(work.markdownText.markdownText || '');
  return (
    <div className={classes.container}>
      <Typography variant="h4" className={classes.pageTitle}>
        {work.name}
      </Typography>
      <div className="flexRow">
        <Chip label={getYear(new Date(work.postedOn))} className={classes.workChip} color="primary" />
        <Typography variant="body1">{work.category}</Typography>
      </div>
      <div className={classes.postDes}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
};
