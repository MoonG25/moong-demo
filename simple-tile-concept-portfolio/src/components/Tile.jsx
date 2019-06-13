import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  container: {
    width: '250px',
    height: '250px',
    margin: '5px',
    flexGrow: '1',
    userSelect: 'none',
    '&:hover': {
      cursor: 'pointer',
      '& > div:first-child': {
        display: 'none'
      },
      '& > div:last-child': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#eee',
    borderRadius: '5px',
  },
  hidden: {
    display: 'none',
    width: '100%',
    height: '100%',
    border: '4px solid #eee',
    borderRadius: '5px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
});

class TileComponent extends React.Component {
  render() {
    const { classes, src, to } = this.props;
    const renderContent = (
      src ? (
        <React.Fragment>
          <img className={classes.image} src={src} width="100%" alt="" />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography variant="h6" gutterBottom>Content Message</Typography>
          <Typography variant="subtitle1" gutterBottom>SUB TITLE</Typography>
          <Typography variant="body1" gutterBottom>body</Typography>
        </React.Fragment>
      )
    )
    return (
      <React.Fragment>
        <div className={classes.container}>
          <div className={classes.content}>
            {renderContent}
          </div>
          <div className={classes.hidden}>
            {
              to ? (
                <a href={to} rel="noopener noreferrer" target="_blank">
                  <Typography variant="h6" gutterBottom>Hidden Message</Typography>
                  <Typography variant="subtitle1" gutterBottom>SUB TITLE</Typography>
                  <Typography variant="body1" gutterBottom>body</Typography>
                </a>
              ) : (
                <React.Fragment>
                  <Typography variant="h6" gutterBottom>Hidden Message</Typography>
                  <Typography variant="subtitle1" gutterBottom>SUB TITLE</Typography>
                  <Typography variant="body1" gutterBottom>body</Typography>
                </React.Fragment>
              )
            }
          </div>
        </div>
      </React.Fragment>
    )
  }
}

TileComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TileComponent);