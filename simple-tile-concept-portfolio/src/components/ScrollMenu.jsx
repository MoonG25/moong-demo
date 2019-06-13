import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Info as InfoIcon } from '@material-ui/icons';
import { Typography, IconButton } from '@material-ui/core';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const styles = theme => ({
  container: {

  },
  profile: {
    padding: '30px',
    textAlign: 'center'
  },
  menuContainer: {

  },
  menu: {
    display: 'flex',
    alignItems: 'center',
    width: '235px',
    margin: '5px',
    padding: '5px',
    '&:hover': {
      backgroundColor: '#eee'
    }
  },
  menuIconBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30px',
    height: '30px',
    color: 'white',
    backgroundColor: '#aaa',
    borderRadius: '3px',
    marginRight: '1em'
  },
  avatar: {
    margin: 10,
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  }
});

class ScrollMenuComponent extends React.Component {
  render() {
    const { classes } = this.props;
    const menus = [
      { icon: 'H', name: 'Home', to: '/' },
      { icon: 'A', name: 'About', to: '/about' },
      { icon: 'B', name: 'Blog', to: '/blog' },
      { icon: 'P', name: 'Portfolio', to: '/portfolio' },
      { icon: 'C', name: 'Contact', to: '/contact' },
      { icon: 'P', name: 'Posts', to: '/posts' },
      { icon: 'T', name: 'Test', to: '/test' },
    ];
    
    const renderMenus = menus.map(menu => (
      <Link key={menu.name} to={menu.to}>
        <div className={classes.menu}>
          <div className={classes.menuIconBox}>{menu.icon}</div>
          <Typography>{menu.name}</Typography>
        </div>
      </Link>
    ));

    return (
      <div className={classes.container}>
        <div className={classes.profile}>
          <Typography variant="h4" gutterBottom>MOONG</Typography>

          <IconButton className={classes.icon} onClick={this.props.onClickProfile}>
            <InfoIcon />
          </IconButton>
        </div>
        <div className={classes.menuContainer}>
          {renderMenus}
        </div>
      </div>
    )
  }
}

ScrollMenuComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScrollMenuComponent);