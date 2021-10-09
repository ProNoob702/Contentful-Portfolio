import React from 'react';
import { Chip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import { contentMaxWidth } from '../../constants';
import { graphql, useStaticQuery } from 'gatsby';

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
    margin: theme.spacing(1, 0),
  },
}));

// export const imgSrc =
//   'https://s3-alpha-sig.figma.com/img/1c6b/bc0b/e719e9d93c02a87ba51308ebb0297cdf?Expires=1634515200&Signature=cHog-gg-LHnZ7Jar-4LBIvEyoSBxR3KrXMF9mU3M1pPPPn44uChuJ4GVz1R96FsJKwMN7-6GcPep9h9JMgb7bW3dfcl56gVnZ6~7SrsFtNvjg0MHRylpstxbh~8Ds94guK09AkHaNicuiBLALimwy7sA~pbFzzEG9NlMIHseaBMQ9Sq47xcZCYz-bDE6hH2KDWtIqOpZ9WRvkNG7fBjhXCm3sdKMg5JsarcBfCshLJFCLJCGpAxAMF36AP4A8e5Tr1wIcl4oHHX4~sdwtNZRAWABWJhNxmc14hCiWX1yZvfU8e~y5-MMh0DJhVdQBnK5Lq9xocs-LAqsx7lDo-shvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';

export const useWorksList = () => {
  const data = useStaticQuery(
    graphql`
      {
        allContentfulWorks {
          edges {
            node {
              category
              description {
                description
              }
              id
              name
              postedOn
              workImage {
                description
                id
                title
                file {
                  fileName
                  url
                }
              }
            }
          }
        }
      }
    `,
  );
  return data;
};

export const FeaturedWorksSide: React.FC<{}> = ({}) => {
  const classes = useFeaturedWorksSideStyles();
  const works = useWorksList();
  const featuredWorks = works?.slice(works.length - 3);
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
                    backgroundImage: `url("")`,
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
                        <Chip label={work.postedOn} className={classes.workItemChip} />
                        <Typography variant="body1">work.</Typography>
                      </span>
                      <Typography variant="body2" component="p" color="textPrimary">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
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
