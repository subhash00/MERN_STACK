import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Avatar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0)
  },
  grid1: {
    height: 300,
    paddingTop: 5,
    backgroundColor: "#336600"
  },
  text: {
    color: "#fff",
    padding: 300,
    paddingTop: 110
  }
}));

const message = `Welcome To My Profile Page. `;

const UserList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs zeroMinWidth className={classes.grid1}>
          <Typography
            className={classes.text}
            variant ="h1"
          >
            {message}</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs>
          <Typography noWrap>{message}</Typography>
        </Grid>
      </Grid>
    </div>
   );
}

export default UserList;
