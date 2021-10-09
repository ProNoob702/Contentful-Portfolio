import React from 'react';
import { Chip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import { contentMaxWidth } from '../../constants';
import { useWorksList } from '../../hooks/useWorksList';
import { getYear } from 'date-fns';

const useFeaturedWorksSideStyles = makeStyles((theme) => ({
  container: {},
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
    paddingLeft: 0,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginRight: 0,
    },
  },
  workItemImg: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      minWidth: 250,
      maxWidth: 250,
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
    margin: theme.spacing(1, 0),
  },
}));

export const FeaturedWorksSide: React.FC<{}> = ({}) => {
  const classes = useFeaturedWorksSideStyles();
  const works = useWorksList();
  const featuredWorks = works.slice(0, 3);
  return (
    <div className={classes.container}>
      <div className={classes.containerInner}>
        <div className={clsx('flexRow', classes.upperSide)}>
          <Typography variant="h6">Featured works</Typography>
        </div>
        <List className={classes.worksList}>
          {featuredWorks.map((work, i) => (
            <div key={i}>
              <ListItem className={classes.workItem} alignItems="flex-start">
                <div
                  className={classes.workItemImg}
                  style={{
                    backgroundImage: `url(${work.workImage.file.url})`,
                  }}
                ></div>
                <ListItemText
                  primary={work.name}
                  className={classes.workItemText}
                  primaryTypographyProps={{
                    className: classes.workItemPrimaryText,
                  }}
                  secondary={
                    <>
                      <span className={clsx(classes.workItemMiddleSide, 'flexStartCenterRow')}>
                        <Chip label={getYear(new Date(work.postedOn))} className={classes.workItemChip} />
                        <Typography variant="body1">{work.category}</Typography>
                      </span>
                      <Typography variant="body2" component="p" color="textPrimary">
                        {work.description.description}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              <Divider className={classes.itemDivider} />
            </div>
          ))}
        </List>
      </div>
    </div>
  );
};
