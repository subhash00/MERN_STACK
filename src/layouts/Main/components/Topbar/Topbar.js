import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton, Menu, MenuItem, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  profileMenu: {
    color: theme.palette.text.hint,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.primary.main,
      color: "white",
    },
  },
  signinMenu: {
    color: theme.palette.white,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.primary.main,
      color: "white",
    }
  }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const GetUsers = useSelector(state => state.GetUsers);
  const { Users } = GetUsers;

  const classes = useStyles();

  const [notifications] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <RouterLink to="/">
          <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.signinMenu}>
            <h1>CovidData</h1>
          </Button>
        </RouterLink>
        <div className={classes.flexGrow} />
        <div>
          {
            Users ? <div>
              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.signinMenu}>
                { Users.name }
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <RouterLink to='/account'>
                    My Account
                  </RouterLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <RouterLink to='/settings'>
                    Settings
                  </RouterLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>        
              </Menu>
            </div> :
              <RouterLink to="/sign-in" variant="h6">
                <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.signinMenu}>
                  Sign-In
                </Button>
              </RouterLink>
           }
        </div>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
