import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar, Divider } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getMahaAction } from "../../../../redux/actions/getMahaAction";


const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.success.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  typo: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
  },
  typo1: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.success.main
  },
  typo2: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.error.main
  },
  differenceIcon: {
    color: theme.palette.success.dark
  },
  differenceValue: {
    color: theme.palette.success.dark,
    marginRight: theme.spacing(1)
  }
}));

const TotalUsers = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const mahaSelector = useSelector((state) => state.GetMaha);
  const dispatch = useDispatch();
  const getMahaAction2 = () => dispatch(getMahaAction());
  const { state, active, confirmed, deaths, recovered, statecode } = mahaSelector.indStates

  useEffect(() => {
    getMahaAction2();
  }, [])
  
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="h3"
            >
              MAHARASHTRA
            </Typography>
            <Divider />
            <Typography variant="h3" className={classes.typo}>Total Cases: {confirmed}</Typography>
            <Typography variant="h3" className={classes.typo}>Active Cases: {active}</Typography>
            <Typography variant="h3" className={classes.typo1}>Recovered: {recovered}</Typography>
            <Typography variant="h3" className={classes.typo2}>Deaths: {deaths}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

TotalUsers.propTypes = {
  className: PropTypes.string
};

export default TotalUsers;
