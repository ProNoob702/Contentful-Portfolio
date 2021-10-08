import React from 'react';
import { useIsMobileView } from '../../hooks/useIsMobileView';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { Link } from 'gatsby';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { contentMaxWidth } from '../../constants';

const useRecentPostsSideStyles = makeStyles((theme) => ({
  container: {
    background: '#EDF7FA',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(6),
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
    paddingBottom: theme.spacing(3),
  },
  containerInner: {
    maxWidth: contentMaxWidth,
    margin: '0px auto',
  },
  upperSide: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(1),
      justifyContent: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(3),
    },
  },
  blogLink: {
    color: theme.palette.secondary.main,
  },
  card: {
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1, 0),
    },
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(2, 1),
    },
  },
  cardTitle: {
    fontWeight: 700,
  },
  seperator: {
    margin: theme.spacing(0, 2),
  },
  txtSpacing: {
    marginBottom: theme.spacing(2),
  },
}));

export const RecentPostsSide: React.FC<{}> = ({}) => {
  const isNotMobileView = useIsMobileView();
  const classes = useRecentPostsSideStyles();
  const getCardClassNameByIndex = (index: number, arrLen: number) => {
    if (index == 0) {
      return 'noMarginLeft';
    } else if (index == arrLen - 1) {
      return 'noMarginRight';
    }
    return null;
  };
  const posts = [1, 2, 3, 4, 5];
  const latestPosts = posts.slice(posts.length - 2);
  const seperator = <span className={classes.seperator}>|</span>;
  return (
    <div className={classes.container}>
      <div className={classes.containerInner}>
        <div className={clsx('flexRow', classes.upperSide)}>
          <Typography variant="h6">Recent posts</Typography>
          {isNotMobileView ? (
            <>
              <span className="takeTheRest" />
              <Link to="/blog/" className={classes.blogLink}>
                <Typography variant="subtitle1">View all</Typography>
              </Link>
            </>
          ) : null}
        </div>
        <div className={clsx(isNotMobileView ? 'flexStartCenterRow flexWrap' : 'flexColumnCenterCenter')}>
          {latestPosts.map((x, i) => (
            <Card className={clsx(classes.card, 'flex-1', getCardClassNameByIndex(i, 2))}>
              <CardContent>
                <Typography variant="h5" className={clsx(classes.cardTitle, classes.txtSpacing)}>
                  Making a design system from scratch
                </Typography>
                <Typography variant="body1" className={classes.txtSpacing}>
                  12 Feb 2020 {seperator} Design Pattern
                </Typography>
                <Typography variant="body2" component="p">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                  enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
